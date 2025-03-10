import {View, Text} from 'react-native';
import React, {useContext} from 'react';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import StackNavigator from './src/navigation/StackNavigator';
import GloableProvider from './src/context/GloableProvider';
import { AuthContext } from './src/context/AuthContext';
import AppProvider from './src/context/AppProvider';

const App = () => {
  return <AppProvider />
};

export default App;
