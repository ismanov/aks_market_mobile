import {StyleSheet} from 'react-native';
import {Colors, sizeH, sizeV} from 'styles';
import {H4} from 'styles/typography';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 5 * sizeV,
    marginTop: 2 * sizeV,
    paddingHorizontal: 3 * sizeH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
  categoryNameStyle: {
    ...H4,
    maxWidth: 71 * sizeH,
    marginRight: 2 * sizeH,
  },
});
