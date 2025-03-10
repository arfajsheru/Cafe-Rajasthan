import React, { createContext, useState } from 'react'

export const FoodItemContext = createContext(); 

const FoodItemProvider = ({ children }) => {
  const[modalVisible, setModalVisible] = useState(false),

  value = {
    modalVisible, setModalVisible
  }
  return (
    <FoodItemContext.Provider value={value}>
        { children }
    </FoodItemContext.Provider>
  )
}

export default FoodItemProvider