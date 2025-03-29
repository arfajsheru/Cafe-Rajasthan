import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

const About = () => {
  const aboutData = [
    {
      title: 'Quality Assurance',
      des: 'We pride ourselves on delivering exceptional quality in every aspect of our services. From luxurious rooms to exquisite dining, every detail is meticulously crafted to ensure your comfort and satisfaction.',
    },
    {
      title: 'Convenience',
      des: 'Our prime location offers easy access to local attractions and business centers, making your stay convenient and enjoyable. Whether you re here for leisure or work, we have you covered.',
    },
    {
      title: 'Exceptional Support',
      des: 'Our dedicated team is available around the clock to assist you with any requests or concerns. We prioritize your needs and strive to provide a personalized experience that exceeds expectations.',
    },
  ];

  return (
    <FlatList
      data={aboutData}
      keyExtractor={(item, index) => index.toString()} // ✅ Fix: Unique key from index
      nestedScrollEnabled={true} // ✅ Fix: Proper scrolling inside ScrollView
      renderItem={({item}) => (
        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>{item.title}</Text>
          <Text style={styles.aboutDescription}>{item.des}</Text>
        </View>
      )}
      ListHeaderComponent={
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/hotel.jpg')}
              resizeMode="cover"
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to Cafe Rajasthan</Text>
            <Text style={styles.description}>
              Where we serve you the best of culinary delights. Our passion for
              food is reflected in every dish we create.
            </Text>
          </View>
        </ScrollView>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    elevation: 20,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  aboutCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 40,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    elevation: 5,
    borderWidth:1.5,
    borderColor:'#ad954d'
  },
  aboutTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ad954d',
    marginBottom: 5,
  },
  aboutDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default About;
