import React from 'react';

const ClientContext = React.createContext();

export const ClientProvider = ({ children }) => {
  return <ClientContext.Provider>
    {children}
  </ClientContext.Provider>
};
