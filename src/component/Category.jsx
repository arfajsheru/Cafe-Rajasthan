import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
const Category = () => {
  const data = [
    { id: '1', category: 'Dahi Salad', image: require('../assets/category1.jpg') },
    { id: '2', category: 'Chinese Starter', image: require('../assets/category2.jpg') },
    { id: '3', category: 'Soup', image: require('../assets/category3.jpg') },
    { id: '4', category: 'Chicken Souse', image: require('../assets/category4.jpg') },
    { id: '5', category: 'Noodles', image: require('../assets/category5.jpg') },
    { id: '6', category: 'Fried Rice', image: require('../assets/category6.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.categoryText}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft:10,
    textTransform:'uppercase'
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 11, // Gap between items
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // Round Image
    backgroundColor: '#eee',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Category;
