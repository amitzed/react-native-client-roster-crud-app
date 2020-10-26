import React, { useReducer } from 'react';

const ClientContext = React.createContext();

const clientReducer = (state, action) => {
  switch(action.type) {
    case 'add_clientdetail':
      return [...state, {name: `Client Detail #${state.length + 1}`}];
    default:
      return state;
  }
};

export const ClientProvider = ({ children }) => {
  const [ clientDetails, dispatch ] = useReducer(clientReducer, []);

  const addClientDetail = () => {
    dispatch({
      type: 'add_clientdetail'
    });
  }

  return <ClientContext.Provider value={{data: clientDetails, addClientDetail}}>
    {children}
  </ClientContext.Provider>
};

export default ClientContext;
