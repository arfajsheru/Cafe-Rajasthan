import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import OrderItem from './OrderItem';
import { useNavigation } from '@react-navigation/native';

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const navigation = useNavigation();
  const {LAPTOP_IP, selectedScreen} = useContext(AuthContext);
  const fetchOrderList = async () => {
    const response = await axios.get(LAPTOP_IP + ':4000/api/order/allorders');
    setOrderList(response.data.orders)
  };

  useEffect(() => {
      fetchOrderList();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>🛒 Order List</Text>

      <FlatList
        data={orderList}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <OrderItem key={item._id} item={item} />
        )}
      />
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#f7e6b9',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  order: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#b5caf2',
    marginBottom: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  orderInfo: {
    flex: 1,
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: '#555',
  },
  location: {
    fontSize: 13,
    color: '#777',
  },
  details: {
    marginTop: 10,
  },
  payment: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
