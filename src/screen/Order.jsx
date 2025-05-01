import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FoodItemContext} from '../context/FoodItemContext';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import OrderItem from '../component/OrderItem';

const Order = () => {
  const navigation = useNavigation();
  const [orderData, setOrderData] = useState([]);
  const {LAPTOP_IP} = useContext(FoodItemContext);
  const {token} = useContext(AuthContext);

  const loadOrderData = async token => {
    try {
      const response = await axios.post(
        `${LAPTOP_IP}:4000/api/order/orderlist`,
        {},
        {headers: {token}},
      );
      setOrderData(response.data.orders);
    } catch (error) {
      console.log('Error fetching order data:', error);
      setOrderData([]); // fallback, if needed
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadOrderData(token); // Token correct hai, just refetch karo
    });
    return unsubscribe
  }, [navigation,token]);
  return (
    
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.textTitle}>All Orders</Text>
        <View style={styles.navigateBtn}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../assets/cart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Image
              style={{width: 24, height: 24, tintColor: 'black'}}
              source={require('../assets/wishlist.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.itemContainer}>
        <Text style={styles.title}>My Orders</Text>
        {/* ✅ Conditional Rendering Starts Here */}
        {token ? 
          (Array.isArray(orderData) && orderData.length > 0 ? (
            orderData.map((order) => (
              <OrderItem key={order._id} item={order} />
            ))
          ) : (
            <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
              Order not found ☺️
            </Text>
          )
         ) : (
          <View style={styles.noLoginContainer}>
            <Image
              style={styles.noLogin}
              source={require('../assets/admin.png')}
            />
            <Text style={styles.textNoLogin}>
              Please login to view your orders.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#ad954d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  navigateBtn: {
    flexDirection: 'row',
    gap: 15,
  },
  itemContainer: {
    flex: 1,
    padding: 15,
    marginBottom:20,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  
  noLogin: {
    width: 400,
    height: 400,
    tintColor: '#D1D5DB',
    resizeMode: 'contain',
  },
  noLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  textNoLogin: {
    fontSize: 45,
    color: '#D1D5DB',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
