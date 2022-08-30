import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions'

const store = createStore(reducer);
const { getState, dispatch, subscribe } = store;
const update = () => {
   document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//    dispatch(creator(...args));
// }


const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
// const incDisprach = bindActionCreators(inc, dispatch);
// const decDisprach = bindActionCreators(dec, dispatch);
// const rndDisprach = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
   const value = Math.floor(Math.random() * 10);
   rnd(value)
})


// let state = reducer(initialValue, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'INC' })
// state = reducer(state, { type: 'DEC' })
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <>
      </>
   </React.StrictMode>
);


// Чистая функция должна соблюдать 2 условия:
// 1.Всегда должна возвращать одинаковый результат, когда в неё приходят одинаковые данные
// 2.Не вызывает внутри себя побочных эффектов
