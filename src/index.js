import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var BrowserRouter = require("react-router-dom").BrowserRouter;

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


