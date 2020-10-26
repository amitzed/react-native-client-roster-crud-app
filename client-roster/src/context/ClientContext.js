import React from 'react';

const ClientContext = React.createContext();

export const ClientProvider = ({ children }) => {
  const clientDetails = [
    { name: 'John Snow' },
    { name: 'Jackie Onassis' }
  ];

  return <ClientContext.Provider value={clientDetails}>
    {children}
  </ClientContext.Provider>
};

export default ClientContext;
