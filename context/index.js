import React, { createContext, useState } from 'react';

const Context = createContext({});

const Provider = ({ children }) => {
  const [simpleResult, updateData] = useState({});

  return (
    <Context.Provider value={{
      simpleResult,
      updateData
    }}>
      {children}
    </Context.Provider>
  );
};

export {
  Context,
  Provider
}
