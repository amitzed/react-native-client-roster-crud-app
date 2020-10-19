import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ClientProvider } from './src/context/ClientContext';

import IndexView from './src/views/IndexView';

const navigator = createStackNavigator({
  Index: IndexView
}, {
  initialRouteName: 'Index',
  defaultNavigationOption: {
    title: 'Client Roster'
  }
});

const App =  createAppContainer(navigator);

export default () => {
  return <ClientProvider>
    <App />
  </ClientProvider>
};
