import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import * as actions from './actions'

import App from './components/App';

const store = createStore(reducer);
const { getState, dispatch, subscribe } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
   // document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// document.getElementById('inc').addEventListener('click', inc)

// document.getElementById('dec').addEventListener('click', dec)

// document.getElementById('rnd').addEventListener('click', () => {
//    const value = Math.floor(Math.random() * 10);
//    rnd(value)
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
);


// Чистая функция должна соблюдать 2 условия:
// 1.Всегда должна возвращать одинаковый результат, когда в неё приходят одинаковые данные
// 2.Не вызывает внутри себя побочных эффектов


// Селекторы в редаксе это функции, которые должны получить кусочек store и давать эту информацию компоненту