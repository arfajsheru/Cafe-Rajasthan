// import { View, Text } from 'react-native'
// import React from 'react'

// const BottomTabNavigator = () => {
//   return (
//     <View>
//       <Text>BottomTabNavigator</Text>
//     </View>
//   )
// }

// export default BottomTabNavigator


import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from '../screen/Menu';
import Search from '../screen/Search';
import Order from '../screen/Order';
import Cart from '../screen/Cart';
import Wishlist from '../screen/Wishlist';
import Home from '../screen/Home';
import Admin from '../screen/Admin';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
const Bottom = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const route = useRoute();
    const {data} = useContext(AuthContext);
    const adminAllowed = ["arfatsheru74@gmail.com", "harisbhoraniya@gmail.com"]
    
  return (
    <Bottom.Navigator 
    screenOptions={({route}) => ({
        tabBarStyle: route.name === "Admin" ? { display: 'none' } : {}
    })}
    >
        <Bottom.Screen name='Home' component={Home} options={{
            tabBarIcon: ({size,color}) => {
                return (
                    <Image style={{width:size, height:size, resizeMode:'contain'}} source={require("../assets/logo.png")} />
                )
            },
            headerShown: false}}/>
            <Bottom.Screen name='Order' component={Order}  options={{
            
                tabBarIcon: ({size,color}) => {
                    return (
                        <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/order.png")} />
                    )
                },
                headerShown: false}}/>
        <Bottom.Screen name='Menu' component={Menu}  options={{
            tabBarIcon: ({size,color}) => {
                return (
                    <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/menu.png")} />
                )
            },
            headerShown: false}}/>
        <Bottom.Screen name='Cart' component={Cart}  options={{
            tabBarIcon: ({size,color}) => {
                return (
                    <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/cart.png")} />
                )
            },
            headerShown: false}}/>
                {adminAllowed.includes(data.email)  ? <Bottom.Screen name='Admin' component={Admin}  options={{
                    tabBarIcon: ({size,color}) => {
                        return (
                            <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/admin.png")} />
                        )
                    },
                    headerShown: false}}/>: null}
    </Bottom.Navigator>
  )
}

export default BottomTabNavigator;