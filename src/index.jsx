import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/main';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
