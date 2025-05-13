import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import OrderItem from './OrderItem';
import {useNavigation} from '@react-navigation/native';

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const {BACKEND_URL, selectedScreen} = useContext(AuthContext);

  const fetchOrderList = async () => {
    try {
      const response = await axios.get(BACKEND_URL + 'api/order/allorders');
      setOrderList(response.data.orders);
    } catch (error) {
      console.log('❌ Error fetching orders:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderList();
  }, []);

    if (loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#ad954d" />
          <Text style={{marginTop: 10, fontWeight: '600'}}>Loading Ordet Items...</Text>
        </View>
      );
    }

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Order List</Text>
        <FlatList
          data={orderList}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <OrderItem key={item._id} item={item} />}
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
  loaderContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    color: '#2c3e50',
    textAlign: 'center',
  },
  loader: {
    marginTop: 50,
  },
});
