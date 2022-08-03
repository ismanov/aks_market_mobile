/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import HeaderBar from 'components/HeaderBar';
import Icon from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator, FlatList, TextInput, View} from 'react-native';
import styles from './styles';
import {Colors} from 'styles';
import {useAppDispatch, useAppSelector} from 'hooks/redux-hooks';
import {getCategories} from 'stores/actions/category-actions';
import Card from './components/CardComponent/Card';
import {setPage, setTotalCategoriesCount} from 'stores/slices/category-slice';

const CategoryScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {categories, loader, page, totalCategoriesCount} = useAppSelector(
    state => state.categoryState,
  );

  const [search, setSearch] = useState('');
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setPage(0));
      dispatch(setTotalCategoriesCount(0));
      dispatch(getCategories(search, true));
    }, 500);
    return () => clearTimeout(id);
  }, [search]);

  const loadMoreData = () => {
    dispatch(getCategories(search || undefined));
  };
  return (
    <View style={styles.container}>
      <HeaderBar title={'Категории'} />
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <Icon name="search" size={20} color={Colors.LIGHT_GREY} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContentContainerStyle}
          onEndReachedThreshold={0.1}
          extraData={[totalCategoriesCount]}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum &&
              setOnEndReachedCalledDuringMomentum(false);
          }}
          onEndReached={() => {
            console.log(page);
            if (!onEndReachedCalledDuringMomentum) {
              (page || 1) * 30 < (totalCategoriesCount || 0) && loadMoreData();
            }
          }}
          ListFooterComponent={
            loader
              ? () => (
                  <View style={styles.flatListFooterContainer}>
                    <ActivityIndicator />
                  </View>
                )
              : undefined
          }
          data={categories || []}
          renderItem={({item, index}) => (
            <Card
              onPress={() =>
                navigation?.navigate('ProductsStack', {categoryId: item._id})
              }
              key={index}
              name={item.name}
            />
          )}
        />
      </View>
    </View>
  );
};

export default React.memo(CategoryScreen);
