import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import About from '../screen/About';
import Contact from '../screen/Contact';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import HelpSupport from '../screen/HelpSupport';
import Profile from '../screen/Profile';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <NavigationContainer

    >
      <Drawer.Navigator
       screenOptions={({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../assets/login.png')} // Yahan apna icon lagao
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
                tintColor: 'black', // Color change karne ke liye
              }}
            />
          </TouchableOpacity>
        ),
        headerShown:false
        
      })}
      drawerContent={(props) => <Profile />}
      >
        <Drawer.Screen name="Home" component={Home}  />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="HelpSupport" component={HelpSupport} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
