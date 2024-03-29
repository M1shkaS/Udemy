import { createAction } from "@reduxjs/toolkit";
import { heroesFetching, heroesFetched, heroesFetchingError } from "../components/heroesList/heroesSlice";
import { filtersFetching, filtersFetched, filtersFetchingError } from "../components/heroesFilters/filtersSlice";

// export const fecthHeroes = (request) => (dispatch) => {
//    dispatch(heroesFetching());
//    request("http://localhost:3001/heroes")
//       .then(data => dispatch(heroesFetched(data)))
//       .catch(() => dispatch(heroesFetchingError()))
// }

// export const fecthFilters = (request) => (dispatch) => {
//    dispatch(filtersFetching());
//    request("http://localhost:3001/filters")
//       .then(data => dispatch(filtersFetched(data)))
//       .catch(() => dispatch(filtersFetchingError()))
// }

//! Убираем т.к используем  createSlice

// export const filtersChange = (name) => {
//    return {
//       type: 'FILTER_CHANGE',
//       payload: name
//    }
// }

// export const filtersChange = (name) => (dispatch) => {
//    setTimeout(() => {
//       dispatch(
//          {
//             type: 'FILTER_CHANGE',
//             payload: name
//          }
//       )
//    }, 1000)

// }

// export const filtersFetching = () => {
//    return {
//       type: 'FILTERS_FETCHING'
//    }
// }


// export const filtersFetched = (filters) => {
//    return {
//       type: 'FILTERS_FETCHED',
//       payload: filters
//    }
// }

// export const filtersFetchingError = () => {
//    return {
//       type: 'FILTERS_FETCHING_ERROR'
//    }
// }

// export const heroesFetching = () => {
//    return {
//       type: 'HEROES_FETCHING'
//    }
// }
// export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetched = (heroes) => {
//    return {
//       type: 'HEROES_FETCHED',
//       payload: heroes
//    }
// }
// export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroAdded = (hero) => {
//    return {
//       type: 'HERO_CREATED',
//       payload: hero
//    }
// }
// export const heroAdded = createAction('HERO_CREATED');

// export const heroesDeleted = (id) => {
//    return {
//       type: 'HEROES_DELETED',
//       payload: id
//    }
// }
// export const heroesDeleted = createAction('HEROES_DELETED');

// export const heroesFetchingError = () => {
//    return {
//       type: 'HEROES_FETCHING_ERROR'
//    }
// }
// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');