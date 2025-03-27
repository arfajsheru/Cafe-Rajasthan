import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import CartTotal from '../component/CartTotal';

const ProcessToCheckOut = () => {
  return (
    <View style={styles.container}>

      {/* Adress container */}
      <View style={styles.sectionContainer}>
        <Text style={styles.titleText}>Dilevery Information</Text>
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

      {/* PayMent Mehtode */}
      <View style={styles.sectionContainer}>
        <Text style={styles.titleText}>Payment Methode</Text>
      </View>
    </View>
  );
};

export default ProcessToCheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
    flexDirection:'column',
    gap:20,
  },
  sectionContainer: {
    flexDirection:'column',
    gap:20,
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
});
