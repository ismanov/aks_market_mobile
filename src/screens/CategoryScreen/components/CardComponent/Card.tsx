import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Colors} from 'styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Card: React.FC<any> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.categoryNameStyle} numberOfLines={2}>
        {props.name}
      </Text>
      <MaterialIcons name="navigate-next" size={24} color={Colors.LIGHT_GREY} />
    </TouchableOpacity>
  );
};

export default Card;
