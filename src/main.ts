import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// @ts-ignore
import {name as appName} from '../app.json';
import App from 'App';

function main() {
  AppRegistry.registerComponent(appName, () => App);
}

export default main;
