import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Amazon = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.google.com' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Amazon;
