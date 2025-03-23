import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const[token, setToken] = useState("");
    const [data, setData] = useState({
      name: '',
      email: '',
      password: '',
    });
  value = {
    token,setToken,
    data, setData
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
