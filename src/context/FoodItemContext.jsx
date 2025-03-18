import React, { createContext, useState } from 'react'

export const FoodItemContext = createContext(); 

const FoodItemProvider = ({ children }) => {
  const[modalVisible, setModalVisible] = useState(false);
  const[isfilterOpen, setisFilterOpen] = useState(false);

  value = {
    modalVisible, setModalVisible,
    isfilterOpen, setisFilterOpen,
  }
  return (
    <FoodItemContext.Provider value={value}>
        { children }
    </FoodItemContext.Provider>
  )
}

export default FoodItemProvider