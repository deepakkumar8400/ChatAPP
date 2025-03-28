import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from './redux/store';

const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
