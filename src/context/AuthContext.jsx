import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, {createContext, useEffect, useRef, useState} from 'react';
import { navigate } from '../navigation/navigationRef';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const gestureSequence = useRef([]);
  const correctPattern = ['UP', 'UP', 'DOWN', 'LEFT', 'RIGHT'];
  const timeoutRef = useRef(null);
  const [currState, setCurrState] = useState('Login');
  

  const resetGesture = () => {
    gestureSequence.current = [];
    console.log('Gesture sequence reset!');
  };

  const toggleAuth = () => {
    setCurrState(prev => (prev === 'Login' ? 'Signup' : 'Login'));
  };

  const handleChange = (key, value) => {
    setData(prevData => ({...prevData, [key]: value}));
  };


  useEffect(() => {
   const getToken = async() => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      const userEmail = await AsyncStorage.getItem("email");
      if(storedToken){
        setToken(storedToken);
        setData({
          name: '', 
          email: userEmail,
          password: '', 
        });
        navigate("Main")
      }

    } catch (error) {
      console.error("Error fetching token", error)
    }
   }              
 
   getToken();            
  }, [token]);

  value = {
    token,
    setToken,
    data,
    setData,
    gestureSequence,
    correctPattern,
    timeoutRef,
    resetGesture,
    currState,
    setCurrState,
    toggleAuth,
    handleChange,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
