import * as React from 'react';
import  ReactDOM  from 'react-dom';
import App from "./App";
import "./i18next";

ReactDOM.render(
  <React.Suspense fallback="loading">
    <App />
  </React.Suspense>,
  document.getElementById('root')
)

