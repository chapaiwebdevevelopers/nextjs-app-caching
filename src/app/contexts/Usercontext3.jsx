'use client'
import React, { createContext } from 'react';
export const UserContext3 = createContext(null)

const ContextProvider3 = ({children}) => {
    return (
        <UserContext3.Provider  value ='3'>
            {children}
        </UserContext3.Provider >
    );
};

export default ContextProvider3;