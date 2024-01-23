// ContextProvider.js
import React, { createContext, useState } from 'react';

export const SomeContext = createContext();

const ContextProvider = ({ children }) => {
  const [basename, setBasename] = useState(/* your logic to set basename */);

  return (
    <SomeContext.Provider value={{ basename }}>
      {children}
    </SomeContext.Provider>
  );
};

export { ContextProvider };
