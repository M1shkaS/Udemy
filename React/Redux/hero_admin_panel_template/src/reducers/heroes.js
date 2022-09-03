import { createReducer } from "@reduxjs/toolkit"

import { heroesFetching, heroesFetched, heroesFetchingError, heroAdded, heroesDeleted } from "../actions"

const initialState = {
   heroes: [],
   heroesLoadingStatus: 'idle',
}

// можно не соблюдать принципы иммутабельности, но не рекомендуется
// Работает только, если  action creator созданы с помощью createAction
// const heroes = createReducer(initialState, builder => {
//    builder
//       .addCase(heroesFetching, state => {
//          state.heroesLoadingStatus = 'loading';
//       })
//       .addCase(heroesFetched, (state, action) => {
//          state.heroes = action.payload;
//          state.heroesLoadingStatus = 'idle';
//       })
//       .addCase(heroesFetchingError, state => {
//          state.heroesLoadingStatus = 'error';
//       })
//       .addCase(heroAdded, (state, action) => {
//          state.heroes.push(action.payload);
//       })
//       .addCase(heroesDeleted, (state, action) => {
//          state.heroes = state.heroes.filter(item => item.id !== action.payload);
//       })
//       .addDefaultCase(() => { });
// })


// Работает ток в нативном js в ts не работает
const heroes = createReducer(initialState, {
   [heroesFetching]: state => { state.heroesLoadingStatus = 'loading' },
   [heroesFetched]: (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.heroes = action.payload;
   },
   [heroesFetchingError]: state => { state.heroesLoadingStatus = 'error' },
   [heroAdded]: (state, action) => {
      state.heroes.push(action.payload);
   },
   [heroesDeleted]: (state, action) => { state.heroes = state.heroes.filter(item => item.id !== action.payload) },
}
   , [],
   state => state
)

export default heroes;



// const heroes = (state = initialState, action) => {
//    switch (action.type) {
//       case 'HEROES_FETCHING':
//          return {
//             ...state,
//             heroesLoadingStatus: 'loading'
//          }
//       case 'HEROES_FETCHED':
//          return {
//             ...state,
//             heroes: action.payload,
//             heroesLoadingStatus: 'idle',
//          }
//       case 'HERO_CREATED':
//          return {
//             ...state,
//             heroes: [...state.heroes, action.payload],
//          }
//       case 'HEROES_DELETED':
//          return {
//             ...state,
//             heroes: state.heroes.filter(item => item.id !== action.payload),
//          }
//       case 'HEROES_FETCHING_ERROR':
//          return {
//             ...state,
//             heroesLoadingStatus: 'error'
//          }
//       default: return state
//    }
// }