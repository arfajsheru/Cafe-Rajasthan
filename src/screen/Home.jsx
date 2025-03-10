import React from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import Header from '../component/Header';
import ChatBoat from '../component/ChatBoat';
import Category from '../component/Category';
import BestSeller from '../component/BestSeller';

const Home = () => {
  // ✅ List Header
  const renderHeader = () => (
    <>
      <Header />
      <Category />
    </>
  );

  // ✅ Render BestSeller Component
  const renderBestSeller = () => <BestSeller />;

  return (
    <View style={styles.homeContainer}>
      {/* ✅ Status Bar Customization */}
      <StatusBar backgroundColor="#ad954f" barStyle="light-content" />
      <Header />
      <Category />
      {/* ✅ FlatList for Scrollable Content */}
      <FlatList
        data={[{ key: 'bestseller' }]} // Dummy data
        renderItem={renderBestSeller}
        keyExtractor={(item) => item.key}
        
      />

      {/* ✅ Floating ChatBot Icon */}
      <View style={styles.chatBoatWrapper}>
        <ChatBoat />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatBoatWrapper: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    zIndex: 100,
  },
});
