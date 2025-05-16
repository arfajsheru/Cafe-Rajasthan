import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const OrderItem = ({item}) => {
  return (
    <View style={styles.order}>
      <Text style={styles.orderId}>🧾 Order ID: <Text style={styles.bold}>{item._id}</Text></Text>
      <Text style={styles.statusDate}>
        🕒 {new Date(item.date).toLocaleString()} | 🔄 Status: <Text style={styles.bold}>{item.status}</Text>
      </Text>

      <Text style={styles.address}>
        📍 {item.address.firstname} {item.address.lastname}, {item.address.street},{' '}
        {item.address.city}, {item.address.state} - {item.address.zipcode}
      </Text>

      <View style={styles.itemList}>
        {item.items.map((product, idx) => (
          <View key={idx} style={styles.row}>
            <Image source={{uri: product.image}} style={styles.image} />
            <View style={styles.orderInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDetails}>
                Qty: {product.quantity} | ₹{product.current_price} x {product.quantity}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.details}>
        <Text style={styles.totalAmount}>💰 Total: ₹{item.amount}</Text>
        <Text style={[styles.paymentStatus, {color: item.payment ? '#27ae60' : '#c0392b'}]}>
          💳 Payment: {item.payment ? 'Paid' : 'Pending'}
        </Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    backgroundColor: '#f4e7c1',
    padding: 16,
    marginBottom: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#d9b44a',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderId: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  statusDate: {
    fontSize: 13,
    color: '#555',
    marginBottom: 8,
  },
  address: {
    fontSize: 13,
    color: '#666',
    marginBottom: 12,
  },
  itemList: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 4,
    resizeMode: 'cover',
    marginRight: 12,
  },
  orderInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  productDetails: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  details: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    paddingTop: 5,
  },
  totalAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  paymentStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
});
