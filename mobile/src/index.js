import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'AsyncStorage has been extracted'
]);

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;