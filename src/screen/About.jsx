import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About Us</Text>
      <Text style={styles.description}>
        Welcome to our app! 🚀 This is a React Native project where you can explore various features.
      </Text>
      <Text style={styles.description}>
        We aim to provide the best experience with high performance and smooth UI. Stay tuned for updates! 💡
      </Text>
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
});

export default About;
