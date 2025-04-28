import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import SearchInput from '../component/SearchInput';
import Filter from '../component/Filter';
import {FlatList} from 'react-native-gesture-handler';
import ProductItem from '../component/ProductItem';
import { FoodItemContext } from '../context/FoodItemContext';
const Menu = () => {
  const navigation = useNavigation();
  const [isfilterOpen, setisFilterOpen] = useState(false);
  const {foodList} = useContext(FoodItemContext);
  const [filterProdcut, setFilterProduct] = useState(foodList);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      {/* 🔥 Custom Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Menu</Text>
        <View style={styles.searchAndCart}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/cart.png')} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/myprofile.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SearchInput />

      {/* 🔥 Rest of the Screen */}
      <View style={styles.container}>
        {/* Filter btn and price sort */}
        <View style={styles.filterContainer}>
          {/* Filter button */}
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => setisFilterOpen(!isfilterOpen)}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/filter.png')}
            />
            <Text style={styles.text}>Filter </Text>
          </TouchableOpacity>

          <View style={styles.priceSort}>
            <Text style={styles.text}>Sort by: Relavent</Text>
            <TouchableOpacity>
              <Image
                style={{width: 20, height: 20, transform: [{rotate: '90deg'}]}}
                source={require('../assets/rightarrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Item list */}
        <FlatList
          data={filterProdcut}
          renderItem={({item}) => <ProductItem item={item} />}
          keyExtractor={item => item._id.toString()}
          numColumns={2}
          ListEmptyComponent={() => (
            <View style={styles.emptyProductContainer}>
              <Image style={styles.emptymenu} source={require("../assets/emptymenu.png")} />
              <Text style={styles.emptyText}>No Products Found 😭</Text>
            </View>
          )}
        />

        {isfilterOpen && (
          <Filter
            isfilterOpen={isfilterOpen}
            setisFilterOpen={setisFilterOpen}
            filterProdcut={filterProdcut}
            setFilterProduct={setFilterProduct}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ad954d',
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'balck',
  },
  container: {
    flex: 1,
  },
  searchAndCart: {
    flexDirection: 'row',
    gap: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  filterBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#E5E7EB',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: 'medium',
    textTransform: 'uppercase',
  },
  priceSort: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  container2: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
  },
  picker: {
    height: 40,
    color: 'black',
  },
  emptyProductContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  emptymenu: {
    width:400,
    height:400,
  },
  emptyText: {
    fontSize: 50,
    fontWeight: 900,
    color: '#D1D5DB',
    textAlign:'center'
  }
});

export default Menu;
