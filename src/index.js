import React from 'react';
import { HashRouter } from 'react-router-dom';
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
    <Provider store={store} >
      <HashRouter>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </HashRouter>
   </Provider>
  );

