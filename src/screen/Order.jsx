import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Order = () => {
  const navigation = useNavigation();


  const orderdata = {
    
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
          <Text style={styles.textTitle}>All Orders</Text>
          <View style={styles.navigateBtn}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image style={{width:24, height:24}} source={require("../assets/cart.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Image style={{width:24, height:24, tintColor:'black'}} source={require("../assets/wishlist.png")} />
          </TouchableOpacity>
          </View>
      </View>


      {/* Order items */}


      <View style={styles.itemContainer}>
        <Text style={styles.title}>My Orders</Text>
      </View>
    </View>
  )
}

export default Order


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  headerContainer: {
    backgroundColor:'#ad954d',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center',
    paddingVertical:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  textTitle: {
    fontSize:18,
    fontWeight:500,
  },
  navigateBtn: {
    flexDirection:'row',
    gap:15,
  },
  itemContainer: {
    flex:1,
    padding:10
  },
  title: {
    fontSize:30,
    fontWeight:700,
    textTransform:'capitalize'
  }
})