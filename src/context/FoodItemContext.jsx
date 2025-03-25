import React, { createContext, useState } from 'react'
import Filter from '../component/Filter';

export const FoodItemContext = createContext(); 

const FoodItemProvider = ({ children }) => {
  const[modalVisible, setModalVisible] = useState(false);
  const[isfilterOpen, setisFilterOpen] = useState(false);
  const[cartItems, setCartItems] = useState({})


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

  

  const value = {
    modalVisible, setModalVisible,
    isfilterOpen, setisFilterOpen,
    cartItems, setCartItems, addToCart, updateCartItems, removeCartItems
  }

  
  return (
    <FoodItemContext.Provider value={value}>
        { children }
    </FoodItemContext.Provider>
  )
}

export default FoodItemProvider