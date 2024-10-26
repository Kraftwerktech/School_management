// src/main.jsx
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import './index.css';
import store from './store';
import loader from './assets/loader.gif';

// Lazily load the App component
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap App with Suspense and provide a centered fallback */}
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}
          >
            <img src={loader} alt="Loading..." />
          </div>
        }
      >
        <App />
      </Suspense>
      <Toaster
        toastOptions={{
          position: 'top-right',
          style: {
            background: '#283046',
            color: 'white',
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
