import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  const PopularSearch = () => {
    const row1 = [
      'Tandoori Dry',
      'Chicken Gravy',
      'Mutton Gravy',
      'Pasta',
      'Biryani Pulao',
      'Chinese Starter',
      'Soup',
    ];
    const row2 = [
      'Paneer',
      'Vegetable Food',
      'Roti',
      'Dessert',
      'Dosa',
      'Noodles',
    ];
  
    // 🔥 Render Function for FlatList
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={styles.searchItem}>
        <Text style={styles.searchText}>{item}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Popular Searches</Text>
  
        {/* 🔥 Row 1 - Horizontal Scroll */}
        <FlatList
          data={row1}
          renderItem={renderItem}
          keyExtractor={(item, index) => `row1-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.row}
        />
  
        {/* 🔥 Row 2 - Horizontal Scroll */}
        <FlatList
          data={row2}
          renderItem={renderItem}
          keyExtractor={(item, index) => `row2-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.row}
        />
      </View>
    );
  };
  
  export default PopularSearch;
  
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
    },
    title: {
      fontSize: 16,
      textTransform: 'capitalize',
      color: '#ad954f',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    row: {
      marginBottom: 10,
    },
    searchItem: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ad954f',
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 10,
      alignItems: 'center',
      
    },
    searchText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#ad954f',
    },
  });
  