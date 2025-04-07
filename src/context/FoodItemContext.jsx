import React, {createContext, useContext, useEffect, useState} from 'react';
import {data} from '../data';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const FoodItemContext = createContext();

const FoodItemProvider = ({children}) => {
  const {token, LAPTOP_IP} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [isfilterOpen, setisFilterOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodlist] = useState([]);
  const delevery_fees = 10;

  const addToCart = async itemId => {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({...prev, [itemId]: 1}));
    } else {
      setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    if (token) {
      await axios.post(
        `${LAPTOP_IP}:4000/api/cart/add`,
        {itemId},
        {headers: {token}},
      );
    }
  };

  const updateCartItems = async itemId => {
    setCartItems(prev => {
      const {[itemId]: _, ...updatedCart} = prev;
      return prev[itemId] > 1
        ? {...prev, [itemId]: prev[itemId] - 1}
        : updatedCart;
    });

    if (token) {
      await axios.post(
        `${LAPTOP_IP}:4000/api/cart/remove`,
        {itemId},
        {headers: {token}},
      );
    }
  };

  const removeCartItems = async itemId => {
    setCartItems(preveCart => {
      const updateCart = {...preveCart};
      delete updateCart[itemId];
      return updateCart;
    });
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    let totalOffer = 0;

    for (const items in cartItems) {
      const itemInfo = foodList.find(food => food._id === items);
      if (itemInfo && cartItems[items] > 0) {
        totalAmount += itemInfo.current_price * cartItems[items];

        if (itemInfo.original_price > itemInfo.current_price) {
          let offer = itemInfo.original_price - itemInfo.current_price;
          totalOffer += offer * cartItems[items];
        }
      }
    }
    return {totalAmount, totalOffer};
  };

  const fetchFoodList = async () => {
    const response = await axios.get(`${LAPTOP_IP}:4000/api/food/list`);
    setFoodlist(response.data.products);
  };

  const loadCartData = async token => {
    const response = await axios.get(`${LAPTOP_IP}:4000/api/cart/get`, {
      headers: {token},
    });
    setCartItems(response.data.cartData);
    console.log(AsyncStorage.getItem('token'));
    console.log(response.data.cartData);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchFoodList();
        if (token) {
          await loadCartData(token);
        }
      } catch (error) {
        console.log(error);
      }
    };  
    loadData();
  }, [token]);

  const value = {
    modalVisible,
    setModalVisible,
    isfilterOpen,
    setisFilterOpen,
    cartItems,
    setCartItems,
    addToCart,
    updateCartItems,
    removeCartItems,
    data,
    getCartAmount,
    delevery_fees,
    foodList,
  };

  return (
    <FoodItemContext.Provider value={value}>
      {children}
    </FoodItemContext.Provider>
  );
};

export default FoodItemProvider;
