'use client';
import React, { createContext, ReactNode, useContext } from 'react';
import userStore from './tcknStore';

interface StoreContextValue {
  userStore: typeof userStore;
}

const StoreContext = createContext<StoreContextValue>({ userStore });

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={{ userStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);