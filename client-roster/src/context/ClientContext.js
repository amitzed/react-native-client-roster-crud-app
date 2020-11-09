import createDataContext from './createDataContext';

const clientReducer = (state, action) => {
  switch(action.type) {
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
    callback();
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
  {addClientDetail, deleteClientDetail},
  []
);
