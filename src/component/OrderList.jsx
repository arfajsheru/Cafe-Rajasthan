import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';

const OrderList = () => {
  const orderdata = [
    {
      id: '1',
      name: 'Paneer Tikka, Butter Naan',
      username: 'rahul_123',
      location: 'Mumbai, India',
      items: 2,
      methode: 'Online Payment',
      payment: 'Completed',
      date: '2024-03-06',
      price: 550,
    },
    {
      id: '2',
      name: 'Veg Biryani, Raita',
      username: 'priya_v',
      location: 'Delhi, India',
      items: 2,
      methode: 'COD',
      payment: 'Pending',
      date: '2024-03-06',
      price: 450,
    },
    {
      id: '3',
      name: 'Chicken Curry, Jeera Rice, Butter Roti',
      username: 'amit_k',
      location: 'Bangalore, India',
      items: 3,
      methode: 'Online Payment',
      payment: 'Completed',
      date: '2024-03-05',
      price: 900,
    },
    {
      id: '4',
      name: 'Masala Dosa, Coconut Chutney',
      username: 'sanya_g',
      location: 'Pune, India',
      items: 2,
      methode: 'COD',
      payment: 'Pending',
      date: '2024-03-05',
      price: 350,
    },
    {
      id: '5',
      name: 'Momos, Chilli Paneer, Fried Rice',
      username: 'vikas_s',
      location: 'Kolkata, India',
      items: 3,
      methode: 'Online Payment',
      payment: 'Completed',
      date: '2024-03-04',
      price: 750,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>🛒 Order List</Text>

      <FlatList
        data={orderdata}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.order}>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={require('../assets/orderbox.png')}
              />
              <View style={styles.orderInfo}>
                <Text style={styles.orderName}>{item.name}</Text>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>

            <View style={styles.details}>
              <Text>🛍 Items: {item.items}</Text>
              <Text>💰 Price: ₹{item.price}</Text>
              <Text>📅 Date: {item.date}</Text>
              <Text>🛒 Method: {item.methode}</Text>
              <Text
                style={[
                  styles.payment,
                  { color: item.payment === 'Completed' ? 'green' : 'red' },
                ]}
              >
                {item.payment === 'Completed' ? '✅ Payment Done' : '❌ Pending'}
              </Text>
            </View>
          </View>
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
