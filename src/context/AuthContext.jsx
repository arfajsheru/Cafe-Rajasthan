import { useNavigation } from '@react-navigation/native';
import React, {createContext, useEffect, useRef, useState} from 'react';

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
    
  }, []);

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
