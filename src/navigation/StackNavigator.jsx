import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screen/Contact';
import About from '../screen/About';
import Login from '../screen/Login';

import Splash from '../screen/Splash';
import BottomTabNavigator from './BottomTabNavigator';
import Profile from '../screen/Profile';
import AiScreen from '../screen/AiScreen';
import Order from '../screen/Order';
import HelpSupport from '../screen/HelpSupport';
import Wishlist from '../screen/Wishlist';
import MyProfile from '../screen/MyProfile';
import ReferAndEarn from '../screen/ReferAndEarn';
import Coupons from '../screen/Coupons';
import Search from '../screen/Search';
import CustomeScreenHeader from '../component/CustomeScreenHeader';
import FoodDetails from '../screen/FoodDetails';

const stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        animation: 'slide_from_right', // 🔥 Right side se slide karega
        headerStyle: {
          backgroundColor: '#ad954f', // 🔥 Header ka background color
          elevation: 0, // 🔥 Android ke liye shadow remove
          shadowOpacity: 0, // 🔥 iOS ke liye shadow remove
        },
      }}>
      {/* <stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      */}
      {/* <stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>  */}
      {/* <stack.Screen name="Signup" component={Signup} 
       options={{
        headerTitleStyle: {
          fontSize: 26,
          fontFamily: 'NotoSerifKhojki-Bold', // ✅ Custom Font
          color: 'black', // ✅ Title Color (Yellow)
        },
        headerStyle: {
          backgroundColor: '#ad954f', // ✅ Background Color
        },
      }}
      /> */}
      <stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <stack.Screen name="AiScreen" component={AiScreen} />
      <stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: () => <CustomeScreenHeader />, // यहाँ Custom Header सेट किया
          headerStyle: {backgroundColor: '#ad954f'}, // Header का Background Color
          headerTitleContainerStyle: {width: '100%'},
        }}
      />

      <stack.Screen name="Profile" component={Profile} />
      <stack.Screen name="About" component={About} />
      <stack.Screen name="Contact" component={Contact} />
      <stack.Screen name="Order" component={Order} />
      <stack.Screen name="HelpSupport" component={HelpSupport} />
      <stack.Screen name="Wishlist" component={Wishlist} />
      <stack.Screen name="MyProfile" component={MyProfile} />
      <stack.Screen name="ReferEarn" component={ReferAndEarn} />
      <stack.Screen name="Coupons" component={Coupons} />
      <stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        options={{
          headerShown:false,
          presentation: "transparentModal", // Piche ki screen dikhegi
          gestureEnabled: true, // Swipe down to close
          cardStyle: {
            height: '80%',
            marginTop: '45%', // Move it up
            borderTopLeftRadius: 20, // Optional: Rounded top corners
            borderTopRightRadius: 20, // Optional: Rounded top corners
            overflow: 'hidden',
          },
          cardStyleInterpolator: ({current}) => ({
            cardStyle: {
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [800, 0], // Slide from bottom
                  }),
                },
              ],
            },
          }),
        }}
      />
    </stack.Navigator>
  );
};

export default StackNavigator;
