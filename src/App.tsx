import 'react-native-gesture-handler';

import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {isReadyNavigation, navigationRef} from 'navigation/navigation-service';
//components
import MainNavigation from 'navigation/MainNavigation';
import AksStatusBar from 'components/StatusBar';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from 'stores/store';
import {Colors} from 'styles';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.BACKGROUND_COLOR,
  },
};

const App: React.FC<any> = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <Provider store={store}>
      <AksStatusBar />
      <NavigationContainer
        theme={navTheme}
        ref={navigationRef}
        onReady={() => {
          isReadyNavigation.current = true;
        }}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
