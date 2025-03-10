import { View, Text } from 'react-native'
import React from 'react'
import GloableProvider from './GloableProvider'
import AppNavigator from '../navigation/AppNavigator'

const AppProvider = () => {
  return (
    <GloableProvider>
      <AppNavigator />
    </GloableProvider>
  )
}

export default AppProvider