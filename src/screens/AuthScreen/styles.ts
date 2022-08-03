import {isIos} from 'utils/constants';
import {StyleSheet} from 'react-native';
import {Colors, sizeH, sizeV, statusBarHeight} from 'styles';
import {H2, T1} from 'styles/typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY,
  },
  header: {
    width: '100%',
    height: 18 * sizeV + statusBarHeight,
  },
  body: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bodyHeader: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 2.5 * sizeV,
  },
  bodyHeaderTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    flexGrow: 1,
    paddingHorizontal: 5 * sizeH,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 0.8 * sizeV,
  },
  inputTitleStyle: {
    ...T1,
    marginBottom: 5,
    color: Colors.GREY,
  },
  inputStyle: {
    width: '100%',
    height: 6.2 * sizeV,
    fontSize: 18,
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREY,
    padding: 10,
    borderRadius: 5,
  },
  buttonStyle: {
    width: '100%',
    height: 6.2 * sizeV,
    marginTop: 2 * sizeV,
    backgroundColor: Colors.BLUE,
    color: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonTextStyle: {
    ...H2,
    color: Colors.WHITE,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: isIos ? 35 : 15,
  },
  footerTextStyle: {
    ...H2,
    color: Colors.BLUE,
  },
});
