import React from 'react';
import { Provider } from 'react-redux';
import { NavigationComponent } from './src/components/NavigationComponent/NavigationComponent';

import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationComponent />
    </Provider>
  );
}
