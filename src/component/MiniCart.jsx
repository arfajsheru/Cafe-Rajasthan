import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, { useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import { FoodItemContext } from '../context/FoodItemContext';
import * as Animatable from 'react-native-animatable';

const MiniCart = () => {
    const {cartItems, getCartAmount} = useContext(FoodItemContext);
    const {totalAmount, totalOffer} = getCartAmount();
    const navigation = useNavigation();

    const totalItems = Object.keys(cartItems).length;

    return (
        <Animatable.View 
            animation="fadeInUp" // या कोई और एनिमेशन जैसे fadeIn, bounce
            duration={500} 
            style={styles.container}
        >
            {/* Cart Icon + Items Info */}
            <View style={styles.cartInfo}>
                <Image style={styles.cartIcon} source={require('../assets/cart.png')} />
                <View>
                    <Text style={styles.text}>
                        {totalItems} Items | ₹{totalAmount}
                    </Text>
                    {totalOffer > 0 && (
                        <Animatable.Text 
                            animation="shake" 
                            iterationCount="infinite" 
                            duration={4000}
                            style={styles.offerText}
                        >
                            You Saved ₹{totalOffer}!
                        </Animatable.Text>
                    )}
                </View>
            </View>

            {/* View Cart Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={styles.button}
            >
                <Animatable.Text 
                    animation="zoomIn" 
                    duration={500} 
                    style={styles.buttonText}
                >
                    View Cart
                </Animatable.Text>
            </TouchableOpacity>
        </Animatable.View>
    );
};

export default MiniCart;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '92%',
    height: 50,
    backgroundColor: '#b0ccf2',
    bottom: 15,
    left: '4%',
    borderRadius: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: 25,
    height: 25,
    tintColor: '#ad964d',
    marginRight: 8,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  offerText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
    color:'green',
    
  },
  button: {
    backgroundColor: '#ad954d',
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
