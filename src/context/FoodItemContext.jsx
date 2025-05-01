import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
export const FoodItemContext = createContext();

const FoodItemProvider = ({children}) => {
  const {token} = useContext(AuthContext);
  const LAPTOP_IP = process.env.LAPTOP_IP;
  const [modalVisible, setModalVisible] = useState(false);
  const [isfilterOpen, setisFilterOpen] = useState(false);      
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodlist] = useState([]);
  const delevery_fees = 10;

  // menu state 
  const [category, setCategory] = useState('Veg');
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  // search state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);


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

    if(token){
      await axios.post(LAPTOP_IP+":4000/api/cart/delete",{itemId}, {headers:{token}})
    }
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
  };

  const handleSearchItems = () => {
    if(!searchTerm ||searchTerm.trim() === ""){
      setSearchFilter([]);
    } 
    else {
      const filterData = foodList.filter((item) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setSearchFilter(filterData);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchFoodList();
        console.log(LAPTOP_IP)
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

    getCartAmount,
    delevery_fees,
    foodList,
    LAPTOP_IP,
    fetchFoodList,

    category,
    setCategory,
    selectedSubCategory,
    setSelectedSubCategory,

    searchTerm,
    setSearchTerm,
    setSearchFilter,
    searchFilter,
    handleSearchItems
  };

  return (
    <FoodItemContext.Provider value={value}>
      {children}
    </FoodItemContext.Provider>
  );
};

export default FoodItemProvider;
