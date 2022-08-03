import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {base_url} from 'api/constants';

const Card: React.FC<any> = props => {
  console.log(`${base_url}products/image/${props.images?.site_uploaded}`);

  return (
    <TouchableOpacity style={styles.container}>
      <FastImage
        style={styles.imageContainer}
        source={{
          uri: `${base_url}products/image?path=${props.images?.site_uploaded}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.productNameStyle} numberOfLines={2}>
        {props.fullName}
      </Text>
      <View>
        <Text>
          prices: {(props?.prices || {})['14a86f7d3df811e2aedc001517d28cb0']}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
