import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalsStyles from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalsStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
