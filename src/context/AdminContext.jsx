import { Children, createContext, useState } from "react";

export const AdminContext = createContext();


const AdminProvider = ({children}) => {
    const[selectedScreen, setSelectedScreen] = useState('AddItem');
    const[category, setCategory] = useState('Veg');
    let value = {
        selectedScreen,setSelectedScreen,
        category, setCategory
    }
    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
};

export default AdminProvider;