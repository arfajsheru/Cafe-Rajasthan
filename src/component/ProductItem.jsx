import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import { FoodItemContext } from '../context/FoodItemContext';
import { useNavigation } from '@react-navigation/native';
const ProductItem = ({item}) => {
  const {cartItems,updateCartItems, addToCart} = useContext(FoodItemContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.productContainer} onPress={() => navigation.push('FoodDetails', {product: item})}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.ratingcontainer}>
          <Text style={styles.rating}>
            {item.rating.stars}★ | {item.rating.view}
          </Text>
        </View>

        <View style={styles.offercontainer}>
          <Text style={styles.offertext}>
            {item.offer}%{'\n'}OFF
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.categoryText}>
          {item.category} | {item.subCategory}
        </Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>

      <View style={styles.btnpriceContainer}>
        <Text style={styles.price}>
          ₹{item.current_Price}{' '}
          <Text style={styles.originalPrice}>₹{item.original_Price}</Text>
        </Text>
      
      <View style={styles.priceandbtn}>
        {!cartItems[item.id] ? (
          <TouchableOpacity
            style={styles.addbtn}
            activeOpacity={1}
            onPress={() => addToCart(item.id)}
            >
            <Text style={styles.addbtntext}>Add</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.addbtnquantity} activeOpacity={1}>
            <TouchableOpacity onPress={() => updateCartItems(item.id)}>
              <Image
                style={styles.minusandplusbtn}
                source={require('../assets/minus.png')}
              />
            </TouchableOpacity>
            <Text style={styles.addbtnquantityText}>{cartItems[item.id]}</Text>
            <TouchableOpacity onPress={() => addToCart(item.id)}>
              <Image
                style={styles.minusandplusbtn}
                source={require('../assets/plus.png')}
              />
            </TouchableOpacity>
          </View>
        )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    margin: 10,
    width: '45%',
    marginBottom: 10,
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
    width: 65,
    height:32,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addbtntext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ad954f',
    textAlign: 'center',
  },
  addbtnquantityText: {
    fontSize: 16,
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
    width: '70',
    height:32,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnpriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minusandplusbtn: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  priceandbtn: {
    marginTop:10,
  }
});
