import {Dimensions} from 'react-native';
import * as Colors from './colors';
import * as Typography from './typography';
import * as Spaces from './spaces';
import * as OtherStyles from './otherStyles';
import Layouts from './layouts';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();
const sizeH: number = Dimensions.get('window').width / 100; // horizontal size
const sizeV: number = Dimensions.get('window').height / 100; // vertical size
const fullHeight: number = Dimensions.get('window').height; // vertical size

export {
  Colors,
  Typography,
  Spaces,
  Layouts,
  OtherStyles,
  statusBarHeight,
  sizeH,
  sizeV,
  fullHeight,
};
