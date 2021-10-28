import React, { createContext } from 'react';
import { useContext } from 'react';
import useFirebase from '../hooks/useFirebase';

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;