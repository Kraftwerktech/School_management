// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast'
import './index.css';
import App from './App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
          toastOptions={{
            position: 'top-right',
            style: {
              background: '#283046',
              color: 'white'
            }
          }}
        />
    </Provider>
  </React.StrictMode>,
);
