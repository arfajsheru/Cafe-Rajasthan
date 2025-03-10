import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const data = [
    {
      id: '1',
      name: 'Dahi Raita',
      description: 'Fresh curd mixed with special spices.',
      current_Price: 40,
      original_Price: 60,
      offer: 20,
      category: 'Veg',
      subCategory: 'Dahi Salad',
      image: require('../assets/food1.jpg'),
      rating: {stars: 4.5, view: 1400},
    },
    {
      id: '2',
      name: 'Paneer Butter Masala',
      description: 'Rich creamy tomato-based curry with soft paneer cubes.',
      current_Price: 180,
      original_Price: 220,
      offer: 18,
      category: 'Veg',
      subCategory: 'Main Course',
      image: require('../assets/food2.jpg'),
      rating: {stars: 4.7, view: 2500},
    },
    {
      id: '3',
      name: 'Chicken Biryani',
      description: 'Spiced basmati rice cooked with marinated chicken.',
      current_Price: 250,
      original_Price: 300,
      offer: 17,
      category: 'Non-Veg',
      subCategory: 'Rice & Biryani',
      image: require('../assets/food3.jpg'),
      rating: {stars: 4.8, view: 5000},
    },
    {
      id: '4',
      name: 'Aloo Paratha',
      description: 'Stuffed wheat flatbread with spiced mashed potatoes.',
      current_Price: 60,
      original_Price: 80,
      offer: 25,
      category: 'Veg',
      subCategory: 'Breakfast',
      image: require('../assets/food4.jpg'),
      rating: {stars: 4.6, view: 1200},
    },
    {
      id: '5',
      name: 'Cold Coffee',
      description:
        'Chilled creamy coffee blended with ice and chocolate syrup.',
      current_Price: 90,
      original_Price: 110,
      offer: 15,
      category: 'Beverage',
      subCategory: 'Drinks',
      image: require('../assets/food5.jpg'),
      rating: {stars: 4.4, view: 1800},
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BestSeller Products</Text>

      <FlatList
        data={data}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item.id.toString()} // Unique key dena important hai
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row:{
    justifyContent:'space-between'
  }
});
