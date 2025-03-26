import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ProductItem from '../component/ProductItem';
import { FoodItemContext } from '../context/FoodItemContext';
import { useNavigation } from '@react-navigation/native';

const FoodDetails = ({route}) => {
  const {product} = route.params;
  const {data} = useContext(FoodItemContext)
  const navigation = useNavigation()
  return (
    <View style={{flex:1, padding: 20, backgroundColor:'#fff' }}>
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Image style={{width:25, height:25}} source={require('../assets/close.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default FoodDetails