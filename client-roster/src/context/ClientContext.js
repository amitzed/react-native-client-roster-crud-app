import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const clientReducer = (state, action) => {
  switch(action.type) {
    case 'get_clientdetails':
      return action.payload
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
    default:
      return state;
  }
};

const getClientDetails = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/clientdetails');

    dispatch({
      type: 'get_clientdetails',
      payload: response.data
    })
  }
}

const addClientDetail = (dispatch) => {
  return async (name, email, phone, address, balance, callback) => {
    await jsonServer.post('clientdetails', {name, email, phone, address, balance});

    if(callback) {
      callback();
    }
  }
}

const editClientDetail = (dispatch) => {
  return async (id, name, email, phone, address, balance, callback) => {
    await jsonServer.put(`/clientdetails/${id}`, {name, email, phone, address, balance})

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
  return async (id) => {
    await jsonServer.delete(`/clientdetails/${id}`)

    dispatch({
      type: 'delete_clientdetail',
      payload: id
    })
  }
}

export const { Context, Provider } = createDataContext(
  clientReducer,
  {getClientDetails, addClientDetail, editClientDetail, deleteClientDetail},
  []
);
