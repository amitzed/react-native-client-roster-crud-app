import createDataContext from './createDataContext';

const clientReducer = (state, action) => {
  switch(action.type) {
    case 'delete_clientdetail':
      return state.filter(
        (clientDetail) => clientDetail.id !== action.payload
      )
    case 'add_clientdetail':
      return [...state, {id: Math.floor(Math.random() * 99999), name: `Client Detail #${state.length + 1}`}];
    default:
      return state;
  }
};

const addClientDetail = (dispatch) => {
  return () => {
    dispatch({
      type: 'add_clientdetail'
    });
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
