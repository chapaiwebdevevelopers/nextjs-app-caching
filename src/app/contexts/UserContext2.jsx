'use client'
import React, { createContext } from 'react';
export const UserContent2 = createContext(null)

const UserProvider2 = ({children}) => {
    return (
        <UserContent2.Provider value='red'>
            {children}
        </UserContent2.Provider>
    );
};

export default UserProvider2;