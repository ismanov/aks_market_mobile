import {StyleSheet} from 'react-native';
import * as Colors from './colors';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  topContent: {
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
    backgroundColor: '#fff',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerColumn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignFlexEnd: {
    alignItems: 'flex-end',
  },
});
