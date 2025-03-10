import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Contact = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@example.com'); // Apna email daal lo!
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contact Us</Text>
      <Text style={styles.description}>Have any questions? Feel free to reach out! ✉️</Text>

      <TouchableOpacity onPress={handleEmailPress} style={styles.button}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
      
      <Text style={styles.footer}>We are here to help! 🚀</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#555',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    color: '#666',
    fontSize: 14,
  },
});

export default Contact;
