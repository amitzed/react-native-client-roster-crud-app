import createDataContext from './createDataContext';

const clientReducer = (state, action) => {
  switch(action.type) {
    case 'add_clientdetail':
      return [...state, {name: `Client Detail #${state.length + 1}`}];
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

export const { Context, Provider } = createDataContext(
  clientReducer,
  {addClientDetail},
  []
);
