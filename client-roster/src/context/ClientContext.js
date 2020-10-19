import React from 'react';

const ClientContext = React.createContext();

export const ClientProvider = ({ children }) => {
  return <ClientContext.Provider value={150}>
    {children}
  </ClientContext.Provider>
};

export default ClientContext;
