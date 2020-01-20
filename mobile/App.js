import React from 'react';

import {StatusBar, YellowBox} from 'react-native';

import Routes from './src/routes';
YellowBox.ignoreWarnings(['Unrecgnized WebSocket']);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D48E7"/>
      <Routes />
    </>
  );
}