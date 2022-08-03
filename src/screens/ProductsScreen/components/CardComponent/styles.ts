import {StyleSheet} from 'react-native';
import {Colors, OtherStyles, sizeH, sizeV} from 'styles';
import {H4} from 'styles/typography';

export default StyleSheet.create({
  container: {
    width: 43 * sizeH,
    height: 60 * sizeH,
    marginTop: 2 * sizeV,
    paddingHorizontal: 3 * sizeH,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    padding: 2 * sizeH,
    marginRight: 4 * sizeH,
    ...OtherStyles.shadow,
  },
  imageContainer: {
    width: 37 * sizeH,
    height: 37 * sizeH,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4 * sizeH,
  },
  productNameStyle: {
    ...H4,
    maxWidth: '90%',
    marginRight: 2 * sizeH,
  },
});
