import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Text } from 'react-native-gesture-handler';
import SearchInput from './SearchInput';
import { useNavigation } from '@react-navigation/native';


const Header = () => {

  const navigation = useNavigation();
  return (
    <Animatable.View 
      animation="slideInDown" 
      duration={500} 
      style={styles.animatedContainer}
    >
      <SafeAreaView style={styles.container}>
        {/* Status Bar */}
        

        {/* Header */}
        <View style={styles.header}>
          {/* Left Side - Logo, Delivery & Location */}
          <View style={styles.logoTextLocContainer}>
            <View  style={styles.leftContainer}>
              {/* Logo */}
              <Image style={styles.logo} source={require('../assets/logo.png')} />

              {/* Delivery Text */}
              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryText}>Delivery in</Text>
                <Text style={styles.minText}>15 Minutes</Text>
              </View>
            </View>

            {/* Location */}
            <View style={styles.locationContainer}>
              <Text style={styles.locText}>Malad East, Mumbai, Maharashtra</Text>
              <TouchableOpacity>
                <Image
                  style={styles.downIcon}
                  source={require('../assets/down.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Right Side - Profile Icon */}
          <TouchableOpacity style={styles.profileContainer}
          onPress={() => navigation.navigate('Profile')}
          >
            <Image
              style={styles.profileIcon}
              source={require('../assets/login.png')}
            />
          </TouchableOpacity>
        </View>

        {/* Search input */}
        <SearchInput />
      </SafeAreaView>
    </Animatable.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  animatedContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, 
  },
  container: {
    backgroundColor: '#ad954f',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoTextLocContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  deliveryContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  minText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locText: {
    fontSize: 14,
    color: '#fff',
    marginRight: 5,
  },
  downIcon: {
    width: 15,
    height: 15,
    tintColor: '#fff',
  },
  profileContainer: {
    padding: 5,
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    tintColor: '#fff',
  },
});
