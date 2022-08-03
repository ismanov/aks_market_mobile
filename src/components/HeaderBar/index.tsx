import React from 'react';
import {TouchableOpacity, Text, View, TextStyle} from 'react-native';
import styles from './styles';

type headerPropsType = {
  leftButtonIcon?: any;
  leftButtonOnPress?: () => void;
  rightButtonIcon?: any;
  rightButtonOnPress?: () => void;
  title?: any;
  titleStyle?: Partial<TextStyle>;
};

const HeaderBar: React.FC<headerPropsType> = function ({
  leftButtonIcon,
  leftButtonOnPress,
  rightButtonIcon,
  rightButtonOnPress,
  title,
  titleStyle,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          leftButtonOnPress && leftButtonOnPress();
        }}>
        {leftButtonIcon}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={[styles.button, titleStyle]}
        onPress={rightButtonOnPress}>
        {rightButtonIcon}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
