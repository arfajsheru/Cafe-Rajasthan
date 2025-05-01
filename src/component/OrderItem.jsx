import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const OrderItem = ({item}) => {
  return (
     <View key={item._id || index} style={styles.order}>
                    <Text style={styles.orderName}>Order ID: {item._id}</Text>
                    <Text style={styles.username}>
                      {new Date(item.date).toLocaleString()} | Status:{' '}
                      {item.status}
                    </Text>
                    <Text style={styles.location}>
                      {item.address.firstname} {item.address.lastname},{' '}
                      {item.address.street}, {item.address.city},{' '}
                      {item.address.state} - {item.address.zipcode}
                    </Text>
                    <View style={{marginTop: 10}}>
                      {item.items.map((item, idx) => (
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
                    <View style={styles.details}>
                      <Text style={styles.payment}>
                        Total Amount: ₹{item.amount}
                      </Text>
                      <Text style={{color: item.payment ? 'green' : 'red'}}>
                        Payment: {item.payment ? 'Paid' : 'Pending'}
                      </Text>
                    </View>
                  </View>
  )
}

export default OrderItem;

const styles = StyleSheet.create({
    order: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#ad954d'
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
})