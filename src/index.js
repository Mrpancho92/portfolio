import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

import {Provider} from 'react-redux';
// import './index.css';
import './style/style.scss';
import App from './app/App';

const store = configureStore({
  reducer: reducer
});

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode> 
    <Provider store={store} >
      <App/>
   </Provider>
    // </React.StrictMode>
  );

