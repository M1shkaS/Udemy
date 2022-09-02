import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';

import filters from '../reducers/filters';
import heroes from '../reducers/heroes';

const stringMiddlewere = ({ getState, dispatch }) => (next) => (action) => {
   if (typeof action === 'string') {
      return next({ type: action })
   }
   return next(action)
}

// const enhancer = (createStore) => (...args) => {
//    const store = createStore(...args);

//    const oldDispatch = store.dispatch;

//    store.dispatch = (action) => {
//       if (typeof action === 'string') {
//          return oldDispatch({
//             type: action
//          })
//       }
//       return oldDispatch(action)
//    }
//    return store;
// }


const store = configureStore({
   reducer: { filters, heroes },
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddlewere),
   devTools: process.env.NODE_ENV !== 'production'
})

// const store = createStore(combineReducers({ filters, heroes }),
//    compose(applyMiddleware(ReduxThunk, stringMiddlewere), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//    // compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

export default store;
