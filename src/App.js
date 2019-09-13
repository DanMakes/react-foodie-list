import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import NavBar from '../src/components/layout/Navbar';
import Login from '../src/components/auth/Login';
import Home from '../src/components/pages/Home';
import Lists from '../src/components/pages/Lists';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <NavBar />
        <Lists />
      </Fragment>
    </Provider>
  );
}

export default App;
