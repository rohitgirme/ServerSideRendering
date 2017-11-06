/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import createStore from './store';

const AppClient = () => {
  const store = createStore(window.__state__);

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
};

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
