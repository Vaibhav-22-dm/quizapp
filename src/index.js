import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var Router = require('react-router')
// var Login = require('./login')
// var auth = require('./auth')

// function requireAuth(nextState, replace) {
//     if (!auth.loggedIn()) {
//         replace({ 
//             pathname:'/App/login/',
//             state: {nextPathname: '/App/'}
//         })
//     }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Router.Router history={Router.browserHistory}>
  //       <Router.Route path='/App/login/' component={Login} />
  //       <Router.Route path='/App/' component={App} onEnter={requireAuth} />
  //   </Router.Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
