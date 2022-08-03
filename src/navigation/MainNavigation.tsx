import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from 'screens/AuthScreen';
import {BASE_ROUTES} from 'navigation/routes';
import BottomTabBar from './TabNavigation';

const Stack = createStackNavigator();

const MainNavigation: React.FC<any> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={BASE_ROUTES.AUTH} component={AuthScreen} />
      <Stack.Screen name={BASE_ROUTES.MAIN} component={BottomTabBar} />
    </Stack.Navigator>
  );
};

export default React.memo(MainNavigation);
