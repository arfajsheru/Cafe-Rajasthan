import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import { FoodItemContext } from '../context/FoodItemContext';
import { useNavigation } from '@react-navigation/native';
const CartItem = ({item}) => {
  const navigation = useNavigation()
  const {cartItems, addToCart, updateCartItems,removeCartItems} = useContext(FoodItemContext);




  return (
    <TouchableOpacity style={styles.itemcontainer} activeOpacity={0.8} onPress={() => navigation.push("FoodDetails", {product: item})}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:item.image}} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <View style={styles.prices}>
          <Text style={styles.itemDupPrice}>Rs.{item.current_price}</Text>
          <Text style={styles.itemOriPrice}>Rs.{item.original_price}</Text>
        </View>
        <View style={styles.offerContainer}>
          <Text style={styles.offerText}>{item.offer}% OFF</Text>
        </View>

        <TouchableOpacity onPress={() => removeCartItems(item._id)} style={styles.closebtn}>
          <Image
            style={styles.closeIcon}
            source={require('../assets/close.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.priceandbtn}>
        <View style={styles.addbtnquantity}>
          <TouchableOpacity
            onPress={() => updateCartItems(item._id)}
            activeOpacity={0.7}>
            <Image
              style={styles.minusandplusbtn}
              source={require('../assets/minus.png')}
            />
          </TouchableOpacity>
          <Text style={styles.addbtnquantityText}>{cartItems[item._id]}</Text>
          <TouchableOpacity
            onPress={() => addToCart(item._id)}
            activeOpacity={0.7}>
            <Image
              style={styles.minusandplusbtn}
              source={require('../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          styles.categoryContainer,
          {borderColor: item.category === 'Veg' ? 'green' : 'red'},
        ]}>
        <View
          style={[
            styles.categoryInner,
            {backgroundColor: item.category === 'Veg' ? 'green' : 'red'},
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemcontainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    padding: 2,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 5,
  },
  imageContainer: {
    position: 'relative',
    width: 80,
    height: 90,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.2, // Black effect with opacity
    borderRadius: 2,
  },
  priceContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  itemDupPrice: {
    fontSize: 22,
    fontWeight: 500,
  },
  itemOriPrice: {
    color: '#808080', // ✅ Gray color
    fontSize: 15, // ✅ Font size 15
    textDecorationLine: 'line-through', // ✅ Line-through effect
    fontWeight: '400', // ✅ Font weight 400
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5,
  },
  offerContainer: {
    borderWidth: 1.5,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: '#EA580C',
  },
  offerText: {
    fontSize: 12,
    fontWeight: 900,
    color: '#EA580C',
  },
  closeIcon: {
    width: 12,
    height: 12,
  },
  closebtn: {
    position: 'absolute',
    right: 2,
    top: 2,
  },
  categoryContainer: {
    position: 'absolute',
    borderWidth: 2,
    height: 20,
    width: 20,
    left: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryInner: {
    width: 12,
    height: 12,
    borderRadius: 25,
  },

  addbtnquantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 1,
  },
  addbtnquantity: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnpriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minusandplusbtn: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: 'white',
    backgroundColor: '#ad954d',
  },
  priceandbtn: {
    position: 'absolute',
    right: 5,
    bottom:6
  },
  
});
