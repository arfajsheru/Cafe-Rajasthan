import React from 'react';
import { StyleSheet, View, FlatList, StatusBar, SafeAreaView } from 'react-native';
import Header from '../component/Header';
import ChatBoat from '../component/ChatBoat';
import Category from '../component/Category';
import BestSeller from '../component/BestSeller';
import SearchInput from '../component/SearchInput';

const Home = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      {/* ✅ Status Bar Customization */}
      <StatusBar backgroundColor="#ad954f" barStyle="light-content" />

      {/* Header */}
      <Header />

      {/* Search Input */}
      <SearchInput />

      {/* Category */}
      <Category />

       {/* ✅ Scrollable Content */}
       <FlatList
        data={[{ key: 'bestseller' }]} // Dummy data
        renderItem={() => <BestSeller />}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingBottom: 80 }} // Extra Space for ChatBot
        showsVerticalScrollIndicator={false}
      />
      
      {/* ✅ Floating ChatBot Icon */}
      <View style={styles.chatBoatWrapper}>
        <ChatBoat />
      </View>
    </SafeAreaView>
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
