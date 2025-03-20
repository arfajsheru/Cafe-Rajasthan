import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Left Side - Back Arrow & My Cart */}
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.arrowicon}
              source={require('../assets/rightarrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.cartText}>My Cart</Text>
        </View>

        {/* Right Side - Search & Wishlist */}
        <View style={styles.rightSection}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              style={[styles.icon, styles.rightIcon]}
              source={require('../assets/search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Image
              style={[styles.icon, styles.wishlistIcon]}
              source={require('../assets/wishlist.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cartContainer}>
        {/* Applu coupon */}
        <View style={styles.couponContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                style={styles.discounticon}
                source={require('../assets/discount.png')}
              />
            </TouchableOpacity>

            <Text>Apply Coupon</Text>
          </View>

          <TouchableOpacity>
            <Image
              style={styles.discounticon}
              source={require('../assets/rightarrow.png')}
            />
          </TouchableOpacity>
        </View>

        {/* Cart content */}
        <View >
          <Text>Your Cart</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#ad954d',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  arrowicon: {
    width: 20,
    height: 20,
    transform: [{rotate: '180deg'}],
  },
  rightIcon: {
    marginRight: 15,
  },
  wishlistIcon: {
    tintColor: 'black',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cartContainer: {
    flex: 1,
    paddingHorizontal:15
  },
  discounticon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 26,
    padding: 10,
    borderRadius: 6,
    elevation: 10,
    marginVertical: 15,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
