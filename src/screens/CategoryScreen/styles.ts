import {StyleSheet} from 'react-native';
import {Colors, sizeH, sizeV} from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },

  searchContainer: {
    width: '100%',
    height: 8 * sizeV,
    paddingHorizontal: 5 * sizeH,
    justifyContent: 'center',
  },

  searchContent: {
    width: '100%',
    height: 5 * sizeV,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 2 * sizeH,
  },

  searchInput: {
    borderWidth: 0,
    width: 78 * sizeH,
    marginLeft: 2 * sizeH,
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 5 * sizeH,
  },
  flatListContentContainerStyle: {},
  flatListFooterContainer: {
    width: '100%',
    height: 6 * sizeV,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
