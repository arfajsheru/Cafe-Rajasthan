import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([
    {
      name: 'Arfaj sheru',
      phoneNumber: 9913690041,
      email: 'arfatsheru74@gmail.com',
      skills: ['java', 'js', 'react js', 'node js', 'mongo db'],
    },
  ]);

  const name = 'Arfaj sheru';

  return (
    <AuthContext.Provider value={{user, setUser, name}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
