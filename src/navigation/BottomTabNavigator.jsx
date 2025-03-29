import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../screen/Menu';
import Order from '../screen/Order';
import Cart from '../screen/Cart';
import Home from '../screen/Home';
import Admin from '../screen/Admin';
import { AuthContext } from '../context/AuthContext';

const Bottom = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const { data } = useContext(AuthContext);
    const adminAllowed = ["arfatsheru74@gmail.com", "harisbhoraniya@gmail.com"];

    return (
        <Bottom.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBar,
                tabBarItemStyle: styles.tabBarItem,
                tabBarLabel: ({ focused }) => (
                    <Text style={[styles.tabLabel, focused && styles.focusedLabel]}>{route.name}</Text>
                ),
                tabBarIcon: ({ focused }) => {
                    let iconSource;
                    switch (route.name) {
                        case 'Home':
                            iconSource = require("../assets/home.png");
                            break;
                        case 'Order':
                            iconSource = require("../assets/order.png");
                            break;
                        case 'Menu':
                            iconSource = require("../assets/menu.png");
                            break;
                        case 'Cart':
                            iconSource = require("../assets/cart.png");
                            break;
                        case 'Admin':
                            iconSource = require("../assets/admin.png");
                            break;
                    }
                    return (
                        <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
                            <Image 
                                source={iconSource} 
                                style={[styles.icon, focused && styles.focusedIcon]} 
                            />
                        </View>
                    );
                },
            })}
        >
            <Bottom.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Bottom.Screen name='Order' component={Order} options={{ headerShown: false }} />
            <Bottom.Screen name='Menu' component={Menu} options={{ headerShown: false }} />
            <Bottom.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
            {adminAllowed.includes(data.email) && (
                <Bottom.Screen name='Admin' component={Admin} options={{ headerShown: false }} />
            )}
        </Bottom.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#ad954d',  // ✅ Pure background color set kar diya
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 65, // ✅ Height reduce kar di (70 se 65 kar diya)
        paddingTop: 10,
        paddingBottom: 0,  // ✅ Extra padding hata di
        borderTopWidth: 0,  // ✅ Koi extra border na aaye
    },
    tabBarItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    focusedIconContainer: {
        transform: [{ translateY: -5 }], // ✅ Focus hone pe upar move hoga
    },
    tabLabel: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        marginTop: 2,
    },
    focusedLabel: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 14, // ✅ Focus hone pe thoda bada label hoga
    },
    icon: {
        width: 26,
        height: 26,
        tintColor: 'black',
    },
    focusedIcon: {
        tintColor: 'white',
        width: 30, // ✅ Focus hone pe icon bada hoga
        height: 30,
    },
});

export default BottomTabNavigator;
