import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';
import { data } from '../data';
const BestSeller = () => {

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
