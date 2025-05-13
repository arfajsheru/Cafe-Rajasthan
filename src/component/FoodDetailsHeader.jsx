import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const FoodDetailsHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>Product Details</Text>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.popToTop()}>
        <Image
          style={styles.closeIcon}
          source={require('../assets/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FoodDetailsHeader;

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  title: {
    fontSize:18,
    fontWeight:'bold',
    color:"black"
  },
  closeBtn: {
    position:'absolute',
    right:10,
    
  },
  closeIcon: {
    width: 16,
    height: 16,
    marginRight: 0,
    tintColor: 'black',
  },
});
