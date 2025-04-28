import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import React, { useContext, useState } from 'react';
import PopularSearch from '../component/PopularSearch';
import { FoodItemContext } from '../context/FoodItemContext';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const {searchFilter} = useContext(FoodItemContext);
  const navigation = useNavigation();


  return (
    <View style={styles.searchScreen}>

      <PopularSearch />
      <Text style={styles.title}>Search Items</Text>


      <FlatList
        data={searchFilter}
        keyExtractor={item => item._id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyMessageContainer}>
            <Image style={styles.emptySearchImage} source={require("../assets/emptySearch.png")} />
            <Text style={styles.emptyMessageText}>No Products Found 😔</Text>
          </View>
        )}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.searchitems}
          onPress={() => navigation.push('FoodDetails', {product: item})}
          activeOpacity={0.8}
          >
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={{uri: item.image}} />
            </View>
            <Text style={styles.itemtext}>
              {item.name} 
              - ₹{item.current_price}
            </Text>
          </TouchableOpacity>
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
  emptyMessageContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:100,
    paddingHorizontal:10,
    gap:20,
  },
  emptySearchImage: {
    width:300,
    height:300,
    tintColor:'#D1D5DB'
  },
  emptyMessageText: {
    fontSize: 50,
    fontWeight: 900,
    color: '#D1D5DB',
    textAlign:'center'
  }
});
