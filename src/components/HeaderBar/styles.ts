import {StyleSheet} from 'react-native';
import {Colors, OtherStyles, statusBarHeight, Typography} from 'styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 54 + statusBarHeight,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: statusBarHeight,
    paddingHorizontal: 16,
    ...OtherStyles.shadow,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    ...Typography.H3,
  },
});
