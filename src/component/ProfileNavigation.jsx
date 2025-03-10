import {View, Text, StyleSheet, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useContext} from 'react';
import { FoodItemContext } from '../context/FoodItemContext';
import SuggestProducts from './SuggestProducts';
import { useNavigation } from '@react-navigation/native';

const ProfileNavigation = () => {
  const {setModalVisible} = useContext(FoodItemContext);
  const navigation = useNavigation();

  const options = [
    { title: 'My Profile', icon: require('../assets/myprofile.png'), name: 'MyProfile' },
    { title: 'About Us', icon: require('../assets/about.png'), name: 'About' },
    { title: 'Contact Us', icon: require('../assets/contact.png'), name: 'Contact' },
    { title: 'Help & Support', icon: require('../assets/help.png'), name: 'HelpSupport' },
    { title: 'Refer & Earn', icon: require('../assets/referandearn.png'), name: 'ReferEarn' },
  ];

  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navContainer}
          activeOpacity={1}
          onPress={() => navigation.navigate(item.name)}>
          <View style={styles.leftContainer}>
            <Image style={styles.icon} source={item.icon} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
          <Image style={styles.arrow} source={require('../assets/rightarrow.png')} />
        </TouchableOpacity>
      ))}

      {/* Suggest Products Button */}
      <TouchableOpacity style={styles.navContainer} activeOpacity={1} onPress={() => setModalVisible(true)}>
        <View style={styles.leftContainer}>
          <Image style={styles.icon} source={require("../assets/suggestproduct.png")} />
          <Text style={styles.text}>Suggest Products</Text>
        </View>
        <Image style={styles.arrow} source={require('../assets/rightarrow.png')} />
      </TouchableOpacity>

      {/* Suggest Products Modal */}

       <SuggestProducts />
    </View>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ad954f',
    borderRadius: 10,
    marginVertical: 5,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '#ad954f',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  arrow: {
    width: 20,
    height: 20,
    tintColor: '#ad954f',
    resizeMode: 'contain',
  },



});
