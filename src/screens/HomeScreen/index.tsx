import HeaderBar from 'components/HeaderBar';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title={'Products'} />
    </View>
  );
};

export default HomeScreen;
