import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useContext} from 'react';
import ProductItem from './ProductItem';
import {FoodItemContext} from '../context/FoodItemContext';
const BestSeller = () => {
  const {foodList} = useContext(FoodItemContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BestSeller Products</Text>

      <FlatList
        data={foodList}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item._id.toString()}
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
  row: {
    justifyContent: 'space-between',
  },
});
