import React from 'react';
import {HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

import {Provider} from 'react-redux';
// import './index.css';
import './style/style.scss';
import App from './app/App';
// import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: reducer
});

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode> 
    <Provider store={store} >
    <HashRouter>
      <App/>
    </HashRouter>
   </Provider>
    // </React.StrictMode>
  );

  // <Provider store={store}>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
