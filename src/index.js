import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Store from './Store'
import About from './components/pages/About'
import Header from './components/layout/Header';

ReactDOM.render(
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <React.StrictMode>
      <Store>
        <Router basename = {process.env.PUBLIC_URL}>
          <Route path = "/" component={Header}/>
          <Route exact path="/" component= {App} />
          <Route path="/about" component = {About} />
        </Router>
      </Store>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
