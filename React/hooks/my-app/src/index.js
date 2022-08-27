import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import AppContext from './AppContext';
import Posts from './Posts';
import AppFirst from './AppFirrst';
import AppReducer from './AppReducer';
import AppHoc from './AppHoc';
import AppTransitionGroup from './AppTransitionGroup';
import FormCustom from './Form';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      {/* <App /> */}
      {/* <Posts /> */}
      {/* <AppContext /> */}
      {/* <AppFirst /> */}
      {/* <AppReducer /> */}
      {/* <AppHoc /> */}
      {/* <AppTransitionGroup /> */}
      <FormCustom />
   </>
   // <React.StrictMode>

   // </React.StrictMode>
);

