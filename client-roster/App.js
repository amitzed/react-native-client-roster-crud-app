import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/ClientContext';

import IndexView from './src/views/IndexView';
import ShowView from './src/views/ShowView';
import CreateView from './src/views/CreateView';
import EditView from './src/views/EditView';

const navigator = createStackNavigator({
  Index: IndexView,
  Show: ShowView,
  Create: CreateView,
  Edit: EditView
}, {
  initialRouteName: 'Index',
  defaultNavigationOption: {
    title: 'Client Roster'
  }
});

const App =  createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
};
