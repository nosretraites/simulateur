import React, { createContext, useState } from 'react';

const Context = createContext({});

const Provider = ({ children }) => {
  const [simpleResult, setSimpleResult] = useState(null);

  return (
    <Context.Provider value={{
      simpleResult,
      setSimpleResult
    }}>
      {children}
    </Context.Provider>
  );
};

export {
  Context,
  Provider
}
