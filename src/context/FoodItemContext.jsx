import React, { createContext, useState } from 'react'
import { data } from '../data';
import { useNavigation } from '@react-navigation/native';
export const FoodItemContext = createContext(); 

const FoodItemProvider = ({ children }) => {
  const[modalVisible, setModalVisible] = useState(false);
  const[isfilterOpen, setisFilterOpen] = useState(false);
  const[cartItems, setCartItems] = useState({})
  const delevery_fees = 10;

  const addToCart = (itemId) => {
    if(!cartItems[itemId]) {
      setCartItems((prev) => ({...prev, [itemId]:1}))
    }
    else {
      setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1}))
    }
  }

  const updateCartItems = (itemId) => {
    setCartItems((prev) => {
      const { [itemId]: _, ...updatedCart } = prev;
      return prev[itemId] > 1 ? { ...prev, [itemId]: prev[itemId] - 1 } : updatedCart;
    });
  };

  const removeCartItems = (itemId) => {
    setCartItems(preveCart => {
      const updateCart = {...preveCart}
      delete updateCart[itemId]
      return updateCart
    })
  }

  const  getCartAmount = () =>  {
    let totalAmount = 0;
    let totalOffer = 0;

    for(const items in cartItems) {
        const itemInfo = data.find((food) => food.id === items);
        if(itemInfo && cartItems[items] > 0){
            totalAmount += itemInfo.current_Price * cartItems[items];

            if(itemInfo.original_Price > itemInfo.current_Price){
                let offer = itemInfo.original_Price - itemInfo.current_Price;
                totalOffer += offer * cartItems[items];
            }
        }
    }
    return { totalAmount, totalOffer };
}
  

  const value = {
    modalVisible, setModalVisible,
    isfilterOpen, setisFilterOpen,
    cartItems, setCartItems, addToCart, updateCartItems, removeCartItems, data, getCartAmount, delevery_fees
  }

  
  return (
    <FoodItemContext.Provider value={value}>
        { children }
    </FoodItemContext.Provider>
  )
}

export default FoodItemProvider