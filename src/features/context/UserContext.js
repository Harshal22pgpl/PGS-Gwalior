// contexts/UserConext.js
'use client'
import React, { createContext, useState, useContext } from 'react';

const UserConext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState({users:[], count:0, user:{}});

  return (
    <UserConext.Provider value={{ userState, setUserState }}>
      {children}
    </UserConext.Provider>
  );
};

export const useUserConext = () => useContext(UserConext);
