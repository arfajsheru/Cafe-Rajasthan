import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      {/* 🔥 Custom Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Menu</Text>
        <View style={styles.searchAndCart}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../assets/search.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/cart.png')} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/myprofile.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔥 Rest of the Screen */}
      <View style={styles.container}>
        <Text>Menu Content Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ad954d',
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'balck',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchAndCart: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default Menu;
