import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const FoodDetailsHeader = () => {
    const navigation = useNavigation();
  return (

      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.popToTop()}>
        <Image
          style={styles.closeIcon}
          source={require('../assets/close.png')}
        />
      </TouchableOpacity>
    
  );
};

export default FoodDetailsHeader;

const styles = StyleSheet.create({
  closeBtn: {
    alignSelf:'flex-end',
    },
  closeIcon: {
    width: 13,
    height: 13,
    marginRight: -10,
    tintColor: 'black',
  },
});
