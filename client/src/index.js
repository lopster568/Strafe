import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {store, persistor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<h1>LOADING......</h1>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

);