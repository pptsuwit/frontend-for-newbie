"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        todo,
        setTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
