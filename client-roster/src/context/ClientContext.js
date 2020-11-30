import createDataContext from './createDataContext';

const clientReducer = (state, action) => {
  switch(action.type) {
    case 'edit_clientdetail':
      return state.map((clientDetail) => {
        return clientDetail.id === action.payload.id
        ?
        action.payload
        :
        clientDetail
      })
    case 'delete_clientdetail':
      return state.filter(
        (clientDetail) => clientDetail.id !== action.payload
      )
    case 'add_clientdetail':
      return [...state, {id: Math.floor(Math.random() * 99999),
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        balance: action.payload.balance
      }
    ];
    default:
      return state;
  }
};

const addClientDetail = (dispatch) => {
  return (name, email, phone, address, balance, callback) => {
    dispatch({
      type: 'add_clientdetail',
      payload: {
        name,
        email,
        phone,
        address,
        balance
      }
    });
    if(callback) {
      callback();
    }
  }
}

const editClientDetail = (dispatch) => {
  return (id, name, email, phone, address, balance, callback) => {
    dispatch({
      type: 'edit_clientdetail',
      payload: { id, name, email, phone, address, balance }
    })
    if(callback) {
      callback();
    }
  }
}

const deleteClientDetail = (dispatch) => {
  return (id) => {
    dispatch({
      type: 'delete_clientdetail',
      payload: id
    })
  }
}

export const { Context, Provider } = createDataContext(
  clientReducer,
  {addClientDetail, editClientDetail, deleteClientDetail},
  [ {name: 'Joe Schmoe', email: 'jschmoe@gmail.com', phone: '888-555-1212', address: '47 West 40th Street, New York, NY 10025', balance: '425', id: 1} ]
);
