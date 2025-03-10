import {View, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // 2 sec delay (earlier was 3s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animatable.View animation="zoomInRight" style={styles.container}>
      {/* Logo with Quick Zoom-in Effect */}
      <Animatable.Image
        animation={{
          0: {opacity: 0, scale: 0.9},
          1: {opacity: 1, scale: 1},
        }}
        duration={1000} // Reduced animation time
        easing="ease-in-out"
        source={require('../assets/AppLogo.png')}
        style={styles.logoImage}
      />

      {/* Small Subtitle with Fast Slide-Up Animation */}
      <Animatable.Text
        animation={{
          0: {opacity: 0, translateY: 15},
          1: {opacity: 1, translateY: 0},
        }}
        duration={800} // Faster appearance
        style={styles.subText}>
        Delicious flavors for every taste!
      </Animatable.Text>

      {/* Veg Box with Quick Bounce */}
      <Animatable.View
        animation="bounceIn"
        duration={1000}
        style={styles.vegbox}>
        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          duration={1500}
          style={styles.subVegbox}
        />
      </Animatable.View>

      {/* Non-Veg Box with Quick Bounce */}
      <Animatable.View
        animation="bounceIn"
        duration={1000}
        style={styles.nonVegbox}>
        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          duration={1500}
          style={styles.nonSubVegbox}
        />
      </Animatable.View>
    </Animatable.View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ad954f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 340,
    height: 200,
  },
  subText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 17,
    color: 'white',
    textAlignVertical: 'bottom',
    fontWeight: '500',
  },
  vegbox: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subVegbox: {
    borderRadius: 20,
    width: 25,
    height: 25,
    backgroundColor: 'green',
  },
  nonVegbox: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonSubVegbox: {
    borderRadius: 20,
    width: 25,
    height: 25,
    backgroundColor: 'red',
  },
});
