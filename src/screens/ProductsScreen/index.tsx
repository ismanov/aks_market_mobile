/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import HeaderBar from 'components/HeaderBar';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ActivityIndicator, FlatList, TextInput, View} from 'react-native';
import styles from './styles';
import {Colors} from 'styles';
import {useAppDispatch, useAppSelector} from 'hooks/redux-hooks';
import Card from './components/CardComponent/Card';
import {getProducts} from 'stores/actions/products-actions';
import {RootStackParamList} from 'interfaces';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {setPage, setProducts} from 'stores/slices/products-slice';
import {setTotalCategoriesCount} from 'stores/slices/category-slice';

type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;

const ProductsScreen: React.FC<Props> = ({route, navigation}) => {
  const categoryId = route.params?.categoryId;
  const dispatch = useAppDispatch();
  const {products, loader, page, totalProductsCount} = useAppSelector(
    state => state.productsState,
  );

  const [search, setSearch] = useState('');
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  useEffect(() => {
    dispatch(getProducts({categoryId}));
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setProducts([]));
      dispatch(setPage(0));
      dispatch(setTotalCategoriesCount(0));
      dispatch(getProducts({search, categoryId}, true));
    }, 500);
    return () => clearTimeout(id);
  }, [search, categoryId]);

  const loadMoreData = () => {
    dispatch(getProducts({search, categoryId}));
  };
  return (
    <View style={styles.container}>
      <HeaderBar
        title={'Продукты'}
        leftButtonOnPress={() => navigation.goBack()}
        leftButtonIcon={
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={Colors.LIGHT_GREY}
          />
        }
      />
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
          extraData={[totalProductsCount]}
          numColumns={2}
          data={products || []}
          keyExtractor={item => item._id}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum &&
              setOnEndReachedCalledDuringMomentum(false);
          }}
          onEndReached={() => {
            console.log(page);
            if (!onEndReachedCalledDuringMomentum) {
              (page || 1) * 30 < (totalProductsCount || 0) && loadMoreData();
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
          renderItem={({item}) => <Card {...item} />}
        />
      </View>
    </View>
  );
};

export default React.memo(ProductsScreen);
