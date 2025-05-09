import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import ProductItem from './ProductItem';
import {FoodItemContext} from '../context/FoodItemContext';
const BestSeller = () => {
  const {foodList} = useContext(FoodItemContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BestSeller Products</Text>

      <FlatList
        data={foodList.filter(item => item.bestSeller === true)}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item._id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={80} color="#ad954d"/>
          </View>
        }
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  }
});
