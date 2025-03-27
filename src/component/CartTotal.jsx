import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {FoodItemContext} from '../context/FoodItemContext';

const CartTotal = ({totalItems}) => {
  const {getCartAmount, delevery_fees} = useContext(FoodItemContext);
  const {totalAmount, totalOffer} = getCartAmount();
  const itemTotal = totalAmount + totalOffer;
  const finalAmount =
    totalItems > 0 ? totalAmount + delevery_fees : totalAmount;
  return (
    <View style={styles.billContainer}>
      <Text style={styles.billHeader}>Total</Text>
      <View style={styles.secPrice}>
        <Text style={styles.text}>Item Total MRP</Text>
        <Text style={styles.price}>₹{itemTotal}</Text>
      </View>

      <View style={styles.secPrice}>
        <Text style={styles.text}>Discount</Text>
        <Text style={styles.discount}>-₹{totalOffer}</Text>
      </View>

      <View style={styles.secPrice}>
        <Text style={styles.text}>Delivery Fee</Text>
        <Text style={styles.price}>₹{delevery_fees}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.secPrice}>
        <Text style={styles.totalText}>To Pay</Text>
        <Text style={styles.totalPrice}>₹{finalAmount}</Text>
      </View>
    </View>
  );
};

export default CartTotal;

const styles = StyleSheet.create({
  billContainer: {
    borderRadius: 12,
    backgroundColor: '#e5e7eb',
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
});
