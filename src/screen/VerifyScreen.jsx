import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const VerifyScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { session_url } = route.params;

  const handleNavigationChange = (navState) => {
    const { url } = navState;

    if (url.includes('/verify')) {
      const success = url.includes('success=true');
      const orderId = new URL(url).searchParams.get('orderId');

      navigation.replace('OrderSummary', { success, orderId }); // 👈 not 'verify'
    }
  };

  return (
    <WebView
      source={{ uri: session_url }}
      startInLoadingState
      onNavigationStateChange={handleNavigationChange}
      renderLoading={() => (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ad954d" />
        </View>
      )}
    />
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
