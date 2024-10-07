// src/main.jsx
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import './index.css';
import store from './store';

// Lazily load the App component
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap App with Suspense and provide a fallback */}
      <Suspense fallback={<div>Loading...</div>}>
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
  </React.StrictMode>,
);
