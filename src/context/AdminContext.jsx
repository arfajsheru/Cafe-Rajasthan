import { createContext, useState} from 'react';
import {BACKEND_URL} from '@env';
export const AdminContext = createContext();

const AdminProvider = ({children}) => {
  const [selectedScreen, setSelectedScreen] = useState('AddItem');

  let value = {
    selectedScreen,
    setSelectedScreen,
    BACKEND_URL
  };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
