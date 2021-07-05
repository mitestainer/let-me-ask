import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MenuToggleProvider } from './contexts/MenuToggleContext';

import './services/firebase'

ReactDOM.render(
  <React.StrictMode>
    <MenuToggleProvider>
      <App />
    </MenuToggleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
