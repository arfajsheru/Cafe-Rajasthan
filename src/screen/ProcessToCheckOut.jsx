import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Linking 
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import CartTotal from '../component/CartTotal';
import { FoodItemContext } from '../context/FoodItemContext';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ProcessToCheckOut = () => {
  const [paymentMethode, setPaymentMethode] = useState('Cod');
  const {foodList, cartItems,setCartItems,getCartAmount,LAPTOP_IP} = useContext(FoodItemContext)
  const navigation = useNavigation();
  const {token} = useContext(AuthContext);

  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  });

  const onChangeHandle = (filedname, value) => {
    setData(prevdata => ({...prevdata, [filedname]:value}))
  }


  const placeOrder = async(event) => {
    event.preventDefault();
  
    let orderItems = [];
    foodList.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    const {totalAmount} = getCartAmount();
    let orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount+ 10,
    };
  
    try {
      let response = await axios.post( LAPTOP_IP+":4000/api/order/place", orderData, {
        headers: { token }
      });
      setCartItems({})
      console.log(response.data.success)
      if (response.data.success) {
        const { session_url } = response.data;
  
        // 👉 Open Stripe Checkout Page
        navigation.navigate("Payment", {session_url: session_url})
        console.log(session_url)
      }
    } catch (err) {
      console.log("Order error:", err);
    }
  };
  return (
    <ScrollView style={styles.container}   
    
    contentContainerStyle={{ paddingBottom: 20 }}
    keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor="#ad954f" barStyle="light-content" />
      {/* Address container */}
      <View style={styles.sectionContainer}>
        <Text style={styles.titleText}>Delivery Information</Text>
        <View>
          <View style={styles.inputsContainer}>
            <TextInput  onChangeText={(text) => onChangeHandle("firstname", text)} value={data.firstname} placeholder="First name" style={styles.input} />
            <TextInput  onChangeText={(text) => onChangeHandle("lastname", text)} value={data.lastname} placeholder="Last name" style={styles.input} />
          </View>
          <TextInput  onChangeText={(text) => onChangeHandle("email", text)} value={data.email} placeholder="Email address" style={styles.inputFull} />
          <TextInput  onChangeText={(text) => onChangeHandle("street", text)} value={data.street} placeholder="Street" style={styles.inputFull} />
          <View style={styles.inputsContainer}>
            <TextInput  onChangeText={(text) => onChangeHandle("city", text)} value={data.city} placeholder="City" style={styles.input} />
            <TextInput  onChangeText={(text) => onChangeHandle("state", text)} value={data.state} placeholder="State" style={styles.input} />
          </View>
          <View style={styles.inputsContainer}>
            <TextInput  onChangeText={(text) => onChangeHandle("zipcode", text)} value={data.zipcode} placeholder="Zipcode" style={styles.input} />
            <TextInput onChangeText={(text) => onChangeHandle("country", text)} value={data.country} placeholder="Country" style={styles.input} />
          </View>
          <TextInput  onChangeText={(text) => onChangeHandle("phone", text)} value={data.phone} placeholder="Phone" style={styles.inputFull} />
        </View>
      </View>

      {/* Cart Total */}
      <View style={styles.sectionContainer}>
        <Text style={styles.titleText}>Bill Details</Text>
        <CartTotal />
      </View>

      {/* Payment Method */}
      <View style={styles.sectionContainer}>
        <Text style={styles.titleText}>Payment Method</Text>
        <View>
          <View style={styles.payMethodeContainer}>
            <TouchableOpacity
              onPress={() => setPaymentMethode('Cod')}
              style={styles.checkOuter}>
              {paymentMethode === 'Cod' ? (
                <View style={styles.checkInner} />
              ) : null}
            </TouchableOpacity>
            <Text style={styles.paymentText}>CASH ON DELIVERY</Text>
          </View>
          <View style={styles.payMethodeContainer}>
            <TouchableOpacity
              onPress={() => setPaymentMethode('Stripe')}
              style={styles.checkOuter}>
              {paymentMethode === 'Stripe' ? (
                <View style={styles.checkInner} />
              ) : null}
            </TouchableOpacity>
            <Image
              source={require('../assets/stripe.png')}
              style={styles.paymentImage}
            />
          </View>
          <View style={styles.payMethodeContainer}>
            <TouchableOpacity
              onPress={() => setPaymentMethode('Razorpay')}
              style={styles.checkOuter}>
              {paymentMethode === 'Razorpay' ? (
                <View style={styles.checkInner} />
              ) : null}
            </TouchableOpacity>
            <Image
              source={require('../assets/razorpay.png')}
              style={styles.paymentImage}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={placeOrder} style={styles.btn} activeOpacity={0.6}>
        <Text style={styles.btntext}>Place order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProcessToCheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
    flexDirection: 'column',
  
  },
  sectionContainer: {
    flexDirection: 'column',
    gap: 10,
    marginBottom:15,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#ad954d',
    padding: 10,
    backgroundColor: '#fff',
  },
  inputFull: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#ad954d',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  payMethodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    gap: 10,
  },
  checkOuter: {
    borderWidth: 1.5,
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkInner: {
    width: 14,
    height: 14,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: '500',
  },
  paymentImage: {
    width: 80,
    height: 25,
    resizeMode: 'contain',
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
});
