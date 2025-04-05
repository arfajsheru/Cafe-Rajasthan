import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfileNavigation from '../component/ProfileNavigation';
import {AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SidebarNav = () => {
  const navigation = useNavigation();
  const {setToken, setData} = useContext(AuthContext);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken('');
      setData({
        name: '',
        email: '',
        password: '',
      });
      navigation.navigate('Main');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.sidebar}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Cafe Rajasthan</Text>
            <Text style={styles.profileInfo}>Caferajsthan@gmail.com</Text>
            <Text style={styles.profileInfo}>8828110344</Text>
          </View>
        </View>
      </View>

      {/* Box section */}
      <View style={styles.container}>
        {/* Order */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Main', {screen: 'Order'})}>
          <Image source={require('../assets/order.png')} style={styles.icon} />
          <Text style={styles.text}>Order</Text>
        </TouchableOpacity>

        {/* Wishlist */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Wishlist')}>
          <Image
            source={require('../assets/wishlist.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Wishlist</Text>
        </TouchableOpacity>

        {/* Coupons */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Coupons')}>
          <Image
            source={require('../assets/discount.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Coupons</Text>
        </TouchableOpacity>

        {/* Help */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('HelpSupport')}>
          <Image source={require('../assets/help.png')} style={styles.icon} />
          <Text style={styles.text}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* cash and gift section */}
      <View style={styles.giftContainer}>
        <View style={styles.giftTop}>
          <Image
            style={{width: 30, height: 30, resizeMode: 'contain'}}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.gifttitle}>CafeRajasthan Cash & Gift Card</Text>
        </View>

        <View style={styles.giftBottom}>
          <Text style={styles.balanceText}>
            Available Balance <Text style={{color: 'black'}}>₹100</Text>
          </Text>

          <Text style={styles.addBalance}>Add Balance</Text>
        </View>
      </View>

      {/* Profile section */}
      <ProfileNavigation />

      {/* Logout button */}
      <View style={styles.logoutcontainer}>
        <TouchableOpacity style={styles.logoutbutton} onPress={logout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.appVersion}>
          <Text style={styles.versiontext}>App Version 1.02.05</Text>
          <Text style={styles.versiontext}>V12-18</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    padding: 5,
    paddingHorizontal: 17,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  nexticon: {
    width: 30,
    height: 30,
    transform: [{rotate: '180deg'}],
  },
  headerText: {fontSize: 18, fontWeight: 'bold'},
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
  profileName: {fontSize: 16, fontWeight: 'bold'},
  profileInfo: {fontSize: 12, color: 'gray'},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  option: {
    height: 80,
    width: 90,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    gap: 5,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
  giftContainer: {
    borderWidth: 2,
    borderColor: '#ad954f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f2e9d2',
    marginVertical: 10,
  },
  giftTop: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.6,
    borderBottomColor: '#ad954f',
    padding: 5,
  },
  gifttitle: {
    fontSize: 20,
    fontWeight: 500,
  },
  giftBottom: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  balanceText: {
    fontSize: 17,
    fontWeight: 500,
    color: '#ACADA8',
  },
  addBalance: {
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ad954f',
    fontSize: 15,
    fontWeight: 900,
    color: '#ad954f',
  },
  logoutcontainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutbutton: {
    borderWidth: 1,
    width: '25%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ad954f',
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: 500,
    color: '#ad954f',
  },
  appVersion: {
    marginVertical: 20,
  },
  versiontext: {
    textAlign: 'center',
    color: '#999999',
    fontWeight: 500,
  },
});

export default SidebarNav;
