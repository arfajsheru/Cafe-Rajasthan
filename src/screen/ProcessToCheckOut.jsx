import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import React, {useState} from 'react';
import CartTotal from '../component/CartTotal';

const ProcessToCheckOut = () => {
  const [paymentMethode, setPaymentMethode] = useState('Cod');
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
            <TextInput placeholder="First name" style={styles.input} />
            <TextInput placeholder="Last name" style={styles.input} />
          </View>
          <TextInput placeholder="Email address" style={styles.inputFull} />
          <TextInput placeholder="Street" style={styles.inputFull} />
          <View style={styles.inputsContainer}>
            <TextInput placeholder="City" style={styles.input} />
            <TextInput placeholder="State" style={styles.input} />
          </View>
          <View style={styles.inputsContainer}>
            <TextInput placeholder="Zipcode" style={styles.input} />
            <TextInput placeholder="Country" style={styles.input} />
          </View>
          <TextInput placeholder="Phone" style={styles.inputFull} />
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

      <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
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
