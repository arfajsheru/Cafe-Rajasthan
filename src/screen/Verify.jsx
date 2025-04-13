import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { FoodItemContext } from '../context/FoodItemContext';

const VerifyScreen = () => {
  const { session_url } = route.params;
  const navigation = useNavigation();

  const handleNavigationChange = (navState) => {
    const { url } = navState;

    // ✅ Customize this part with your actual frontend success/cancel URLs
    if (url.includes('/verify')) {
      const success = url.includes('success=true');
      const orderId = new URL(url).searchParams.get('orderId');

      navigation.replace('verify', { success, orderId });
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
