import {Dimensions} from 'react-native';
import {isIos} from 'utils/constants';

const size: number = Dimensions.get('window').width * 0.00266;

export const shadow = {
  shadowColor: 'rgba(0, 0, 0, 0.05)',
  shadowOffset: {
    width: 0,
    height: 8 * size,
  },
  shadowOpacity: 0.58,
  shadowRadius: 25 * size,
  elevation: 24,
};
export const shadowForWhite = {
  shadowColor: `rgba(0, 0, 0, ${isIos ? '0.1' : 0.3})`,
  shadowOffset: {
    width: 0,
    height: 8 * size,
  },
  shadowOpacity: 0.56,
  shadowRadius: 25 * size,
  elevation: 12,
};
