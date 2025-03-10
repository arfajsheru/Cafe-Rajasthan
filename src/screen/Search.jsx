import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import PopularSearch from '../component/PopularSearch';

const Search = () => {
  const foodItems = [
    {
      id: 1,
      name: 'Tandoori Chicken',
      price: 250,
      image: require('../assets/food1.jpg'),
    },
    {
      id: 2,
      name: 'Mutton Biryani',
      price: 320,
      image: require('../assets/food2.jpg'),
    },
    {
      id: 3,
      name: 'Chicken Curry',
      price: 200,
      image: require('../assets/food3.jpg'),
    },
    {
      id: 5,
      name: 'Paneer Butter Masala',
      price: 180,
      image: require('../assets/food4.jpg'),
    },
    {
      id: 6,
      name: 'Mutton Gravy',
      price: 280,
      image: require('../assets/food5.jpg'),
    },
    {
      id: 7,
      name: 'Tandoori Roti',
      price: 40,
      image: require('../assets/category3.jpg'),
    },
    {
      id: 8,
      name: 'Dessert',
      price: 150,
      image: require('../assets/category1.jpg'),
    },
  ];

  return (
    <View style={styles.searchScreen}>
      <PopularSearch />

      <Text style={styles.title}>Search Items</Text>

      <FlatList
        data={foodItems}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.searchitems}>
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <Text style={styles.itemtext}>
              {item.name} 
              - ₹{item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchScreen: {
    padding: 10,
    flex: 1,
  },
  searchitems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#ad954f',
    fontWeight: 'bold',
    marginBottom: 10,
    paddingBottom: 5,
  },
  image: {
    width: 55,
    height: 55,
  },
  imagecontainer: {
    borderWidth: 1.5,
    borderColor: '#ad954f',
    padding: 3,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  itemtext: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
