import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking, ScrollView } from 'react-native';

const Contact = () => {
  const handleCall = () => {
    Linking.openURL('tel:+919930503923'); // Updated phone number
  };

  const handleEmail = () => {
    Linking.openURL('mailto:caferajasthan@gmail.com'); // Corrected email address
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Address Section */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.infoText}>
          346, Opp. BMC Market, Swami Vivekananda Rd, Fish Market Area, Navneeth Colony, Andheri West, Mumbai, Maharashtra 400058
        </Text>
      </View>

      {/* Phone */}
      <TouchableOpacity style={styles.infoBox} onPress={handleCall}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={[styles.infoText, styles.link]}>+91 99305 03923</Text>
      </TouchableOpacity>

      {/* Email */}
      <TouchableOpacity style={styles.infoBox} onPress={handleEmail}>
        <Text style={styles.label}>Email:</Text>
        <Text style={[styles.infoText, styles.link]}>caferajasthan@gmail.com</Text>
      </TouchableOpacity>

      {/* Opening Hours */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Opening Hours:</Text>
        <Text style={styles.infoText}>9:00 AM - 1:00 AM</Text>
      </View>

      {/* Contact Form */}
      <Text style={styles.formTitle}>Send us a Message</Text>
      <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor="#666" />
      <TextInput style={styles.input} placeholder="Your Email" placeholderTextColor="#666" keyboardType="email-address" />
      <TextInput style={[styles.input, styles.messageBox]} placeholder="Your Message" placeholderTextColor="#666" multiline />

      {/* Send Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  infoBox: {
    width: '100%',
    marginBottom: 12,
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ad954d',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5a3b1e',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d9c4a5',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  messageBox: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#ad954d',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // Android shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Contact;
