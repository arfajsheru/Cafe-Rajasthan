import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import CartItem from '../component/CartItem';
import {ScrollView} from 'react-native-gesture-handler';
import { FoodItemContext } from '../context/FoodItemContext';
import CartTotal from '../component/CartTotal';
const Cart = () => {
  const navigation = useNavigation();
  const {cartItems, foodList} = useContext(FoodItemContext);
  const totalItems = Object.keys(cartItems).length;
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Left Side - Back Arrow & My Cart */}
        <View style={styles.leftSection}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => navigation.goBack()}>
            <Image
              style={styles.arrowicon}
              source={require('../assets/arrow.png')}
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        nestedScrollEnabled={true}>
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
          <Text style={styles.sectionTitle}>Review Your Order</Text>
          <View style={styles.cartItemContainer}>
            <View style={styles.CartHeader}>
              <Text style={styles.headerText}>
                Dlievery in {'\n'}
                <Text style={styles.timeText}>17 mins</Text>
              </Text>
              <Text style={styles.headerText}>{totalItems} items</Text>
            </View>

            <View style={{marginTop: 10}}>
              {!Object.keys(cartItems).length ? (
                <View style={styles.emptyContainer}>
                  <Image
                    style={{width: 200, height: 200, tintColor: '#D1D5DB'}}
                    source={require('../assets/emptycart.png')}
                  />
                  <Text style={styles.emptyText}>Your Cart is Empty 😔</Text>
                </View>
              ) : (
                <View>
                  {foodList.map((item, index) => {
                    if(cartItems[item._id] > 0){
                      return (
                        <CartItem item={item} key={index}/>
                      )
                    }
                  })}
                </View>
              )}
            </View>
            {/* */}
          </View>

          <View style={styles.itemMissed}>
            <Text style={styles.textmissed}>Missed Somthing?</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Menu')}>
              <Text style={styles.textNavigation}>Add more items</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Bill Details</Text>

          <CartTotal totalItems={totalItems} />

          <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.btntext}>Process To Chekout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#ad954d',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  scrollContent: {paddingBottom: 20},
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
    paddingHorizontal: 15,
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
    padding: 14,
    borderRadius: 10,
    elevation: 15,
    marginVertical: 12,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cartItemContainer: {
    borderRadius: 15,
    backgroundColor: '#e5e7eb',
    marginTop: 5,
    padding: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginTop: 10,
    marginBottom:10,
  },
  CartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ad954d',
    borderStyle: 'dotted',
    paddingBottom: 6,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 500,
    color: '#777d8c',
  },
  timeText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#AD954D',
  },
  billContainer: {
    borderRadius: 12,
    backgroundColor: '#e5e7eb',
    marginTop: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  billHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  secPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#959595',
    textDecorationLine: 'line-through',
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: '#ad954d',
    marginVertical: 8,
    borderStyle: 'dotted',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ad954d',
  },
  btn: {
    backgroundColor: '#ad954d',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    borderRadius: 3,
  },
  btntext: {
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
  },
  emptyContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 50,
    fontWeight: 900,
    color: '#D1D5DB',
    textAlign:'center'
  },
  itemMissed: {
    backgroundColor: '#e5e7eb',
    padding: 5,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    alignItems: 'center',
  },
  textmissed: {
    fontSize: 15,
    fontWeight: 600,
  },
  textNavigation: {
    fontSize: 15,
    fontWeight: 600,
    color: '#ad954d',
  },
});
