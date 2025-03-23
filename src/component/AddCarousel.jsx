import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', image: require('../assets/banner1.jpg') },
  { id: '2', image: require('../assets/banner2.jpg') },
  { id: '3', image: require('../assets/banner6.jpg') },
  { id: '4', image: require('../assets/banner5.jpg') },
];

const AddCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={3000}
        data={data}
        width={width}
        pagingEnabled={true}
        snapEnabled={true}
        mode='stack'
        height={220}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            {/* ✅ Black Opacity Overlay */}
            <View style={styles.overlay} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'auto',
    marginTop:20,
    marginBottom:-22,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Important for absolute overlay
  },
  image: {
    width: '94%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: '94%',
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // ✅ 40% Black Opacity
    borderRadius: 10,
  },
});

export default AddCarousel;
