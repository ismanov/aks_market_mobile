import React from 'react';
import {Platform, StatusBar} from 'react-native';

const AksStatusBar = function () {
  if (Platform.OS === 'android') {
    return (
      <StatusBar
        translucent={true}
        backgroundColor="rgba(0,0,0,0.0)"
        barStyle="dark-content"
      />
    );
  }
  return <StatusBar barStyle="dark-content" />;
};

export default AksStatusBar;
