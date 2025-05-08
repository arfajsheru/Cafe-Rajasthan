import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import {WebView} from "react-native-webview"

const PaymentWebView = ({route}) => {
    const {session_url} = route.params;

  return (
    <WebView 
    source={{ uri: session_url }} 
    startInLoadingState
    renderLoading={() => (
      <View style={styles.loader}>
        <ActivityIndicator
        dicator size="large" color="#ad954d" />
      </View>
    )}
  />
  )
}

export default PaymentWebView


const styles = StyleSheet.create({
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });