import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
export const FoodItemContext = createContext();

const FoodItemProvider = ({children}) => {
  const {token} = useContext(AuthContext);
  const LAPTOP_IP = process.env.LAPTOP_IP;
  const BACKEND_URL = process.env.BACKEND_URL;
  const [modalVisible, setModalVisible] = useState(false);
  const [isfilterOpen, setisFilterOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodlist] = useState([]);
  const delevery_fees = 10;
  
  // menu state
  const [category, setCategory] = useState('Veg');
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  
  // search state
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState([]);
  const [wishlistLoaded, setWishlistLoaded] = useState(false);
  const [WishlistItems, setWishlistItems] = useState([]);

  const addToCart = async itemId => {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({...prev, [itemId]: 1}));
    } else {
      setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    if (token) {
      await axios.post(
        `${BACKEND_URL}api/cart/add`,
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
        `${BACKEND_URL}api/cart/remove`,
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

    if (token) {
      await axios.post(
        BACKEND_URL + 'api/cart/delete',
        {itemId},
        {headers: {token}},
      );
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
    const response = await axios.get(`${BACKEND_URL}api/food/list`);
    setFoodlist(response.data.products);
  };

  const loadCartData = async token => {
    const response = await axios.get(`${BACKEND_URL}api/cart/get`, {
      headers: {token},
    });
    setCartItems(response.data.cartData);
  };

  const handleSearchItems = () => {
    if (!searchTerm || searchTerm.trim() === '') {
      setSearchFilter([]);
    } else {
      const filterData = foodList.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchFilter(filterData);
    }
  };

  const getWishlist = async () => {
    try {
      const response = await axios.post(
        `${LAPTOP_IP}:4000/api/wishlist/get`,
        {},
        {headers: {token}},
      );
      const items = response?.data?.wishlist?.items;

        setWishlistItems(items);
        setWishlistLoaded(true)

    } catch (error) {
      console.log('Error fetching wishlist', error);
      setWishlistLoaded(true)
    }
  };

  const addToWishlist = async itemId => {
    try {
      const response = await axios.post(
        `${LAPTOP_IP}:4000/api/wishlist/add`,
        {itemId}, // <- only itemId in body
        {headers: {token}},
      );

      if (response.data && response.data.wishlist) {
        setWishlistItems(response.data.wishlist.items);
      }
    } catch (error) {
      console.log('Error adding to wishlist', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchFoodList();
        if (token) {
          await loadCartData(token);
          await getWishlist();
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
    BACKEND_URL,
    fetchFoodList,

    category,
    setCategory,
    selectedSubCategory,
    setSelectedSubCategory,

    searchTerm,
    setSearchTerm,
    setSearchFilter,
    searchFilter,
    handleSearchItems,

    WishlistItems,
    setWishlistItems,
    addToWishlist,
    wishlistLoaded
  };

  return (
    <FoodItemContext.Provider value={value}>
      {children}
    </FoodItemContext.Provider>
  );
};

export default FoodItemProvider;
