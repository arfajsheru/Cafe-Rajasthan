import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {FoodItemContext} from '../context/FoodItemContext';
import {useNavigation} from '@react-navigation/native';
const ProductItem = ({item}) => {
  const {cartItems, updateCartItems, addToCart, addToWishlist, WishlistItems, wishlistLoaded} =
    useContext(FoodItemContext);

  const navigation = useNavigation();

  const isInWishlist = itemId => WishlistItems?.includes(itemId);

  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.push('FoodDetails', {product: item})}
      activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.ratingcontainer}>
          <Text style={styles.rating}>
            {item.rating.stars}★ | {item.rating.views}
          </Text>
        </View>

        <View style={styles.offercontainer}>
          <Text style={styles.offertext}>
            {item.offer}%{'\n'}OFF
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => addToWishlist(item._id)}
          style={styles.favoriteContainer}
          activeOpacity={0.7}>
          {wishlistLoaded ? (
    <Image
      style={[
        styles.favoriteImage,
        {
          tintColor: isInWishlist(item._id) ? 'red' : 'white',
        },
      ]}
      source={
        isInWishlist(item._id)
          ? require('../assets/favorite_full.png')
          : require('../assets/favorite.png')
      }
    />
  ) : (
    <Image
      style={[styles.favoriteImage, {tintColor: 'gray'}]}
      source={require('../assets/favorite.png')}
    />
  )}
        </TouchableOpacity>
      </View>

      {/* Category & Subcategory */}
      <View>
        <Text style={styles.categoryText}>
          {item.category} | {item.subcategory}
        </Text>
      </View>

      {/* Item name  */}
      <Text style={styles.name}>{item.name}</Text>

      {/* Item price  */}
      <View style={styles.btnpriceContainer}>
        <Text style={styles.price}>
          ₹{item.current_price}{' '}
          <Text style={styles.originalPrice}>₹{item.original_price}</Text>
        </Text>
      </View>

      <View style={styles.priceandbtn}>
        {!(cartItems && cartItems[item._id]) ? (
          <TouchableOpacity
            style={styles.addbtn}
            activeOpacity={1}
            onPress={() => addToCart(item._id)}>
            <Text style={styles.addbtntext}>Add To Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.addbtnquantity}>
            <TouchableOpacity onPress={() => updateCartItems(item._id)}>
              <Image
                style={styles.minusbtn}
                source={require('../assets/minus.png')}
              />
            </TouchableOpacity>
            <Text style={styles.addbtnquantityText}>{cartItems[item._id]}</Text>
            <TouchableOpacity onPress={() => addToCart(item._id)}>
              <Image
                style={styles.plusbtn}
                source={require('../assets/plus.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    width: '48%',
    marginBottom: 10,
    marginHorizontal: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%', // Pura cover karega
    height: 160, // Height correct kar diya
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative', // Relative diya taki child (rating) absolute ho sake
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  favoriteImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: 'red',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 800,
    color: '#737987',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  originalPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  rating: {
    fontSize: 11,
    color: 'black',
    fontWeight: 'bold',
  },
  ratingcontainer: {
    position: 'absolute',
    bottom: 3, // Image ke bilkul bottom pe
    left: 3, // Image ke bilkul left pe
    backgroundColor: '#ffffffb7',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 2, // Thoda rounded effect
  },
  offercontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#ea580c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderStartStartRadius: 7,
    borderEndEndRadius: 7,
    borderRightWidth: 3,
    borderColor: 'white',
  },
  offertext: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#fff',
  },
  wavyBorder: {
    position: 'absolute',
    bottom: -7, // Wave ko neeche shift karne ke liye
    left: 0,
  },
  addbtn: {
    borderWidth: 2,
    borderColor: '#ad954f',
    paddingVertical: 3,
    height: 38,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addbtntext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ad954f',
    textAlign: 'center',
  },
  addbtnquantityText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 1,
  },
  addbtnquantity: {
    borderWidth: 2,
    borderColor: '#ad954f',
    backgroundColor: '#ad954f',
    flexDirection: 'row',
    paddingVertical: 3,
    height: 38,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnpriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minusbtn: {
    width: 70,
    height: 70,
    tintColor: 'white',
  },
  plusbtn: {
    width: 60,
    height: 60,
    tintColor: 'white',
  },
  priceandbtn: {
    marginTop: 10,
  },
});
