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

const Order = () => {
  const navigation = useNavigation();
  const [orderData, setOrderData] = useState([]);
  const {LAPTOP_IP} = useContext(FoodItemContext);
  const {token} = useContext(AuthContext);

  const loaderOrderData = async () => {
    try {
      if (!token) {
        setOrderData([]);
      }

      const response = await axios.post(
        `${LAPTOP_IP}:4000/api/order/orderlist`,
        {},
        {headers: {token}},
      );
      setOrderData(response.data.orders);
    } catch (error) {
      console.log('Error ' + error);
    }
  };

  useEffect(() => {
    loaderOrderData();
  }, [token]);
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

      {/* Order items */}
      <ScrollView style={styles.itemContainer}>
        <Text style={styles.title}>My Orders</Text>


        {/* Orders data */}
        {orderData.map((order, index) => (
          <View key={order._id || index} style={styles.order}>
            {/* Order Meta Info */}
            <Text style={styles.orderName}>Order ID: {order._id}</Text>
            <Text style={styles.username}>
              {new Date(order.date).toLocaleString()} | Status: {order.status}
            </Text>

            {/* Address */}
            <Text style={styles.location}>
              {order.address.firstname} {order.address.lastname},{' '}
              {order.address.street}, {order.address.city},{' '}
              {order.address.state} - {order.address.zipcode}
            </Text>

            {/* Ordered Items */}
            <View style={{marginTop: 10}}>
              {order.items.map((item, idx) => (
                <View key={idx} style={styles.row}>
                  <Image source={{uri: item.image}} style={styles.image} />
                  <View style={styles.orderInfo}>
                    <Text style={styles.orderName}>{item.name}</Text>
                    <Text style={styles.username}>
                      Qty: {item.quantity} | Price: ₹{item.current_price} x{' '}
                      {item.quantity}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Amount and Payment */}
            <View style={styles.details}>
              <Text style={styles.payment}>Total Amount: ₹{order.amount}</Text>
              <Text style={{color: order.payment ? 'green' : 'red'}}>
                Payment: {order.payment ? 'Paid' : 'Pending'}
              </Text>
            </View>
          </View>
        ))}
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
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  order: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  username: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  location: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    resizeMode: 'cover',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  orderInfo: {
    flex: 1,
  },
  details: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  payment: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#444',
  },
});
