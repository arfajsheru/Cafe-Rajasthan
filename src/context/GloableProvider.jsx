import {View, Text} from 'react-native';
import React from 'react';
import AuthProvider from './AuthContext';
import FoodItemProvider from './FoodItemContext';
import AdminProvider from './AdminContext';

const GloableProvider = ({children}) => {
  return (
    <AuthProvider>
      <AdminProvider>
        <FoodItemProvider>{children}</FoodItemProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default GloableProvider;
