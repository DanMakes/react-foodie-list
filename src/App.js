import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../src/components/layout/Navbar';
import Login from '../src/components/auth/Login';
import Home from '../src/components/pages/Home';
import Lists from '../src/components/pages/Lists';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/lists' component={Lists} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
