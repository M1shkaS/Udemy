import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
   heroes: [],
   heroesLoadingStatus: 'idle',
}

// Возвращает три состояния, которые нужно обработать в extraReducers
// и нельзя её вместе с useCallback
export const fecthHeroes = createAsyncThunk(
   'heroes/fecthHeroes',
   () => {
      const { request } = useHttp();
      return request("http://localhost:3001/heroes")
   }
)

const heroesSlice = createSlice({
   name: 'heroes',
   initialState,
   reducers: {
      // Можно убрать т.к у нас всё это контролирует extraReducers
      // heroesFetching: state => { state.heroesLoadingStatus = 'loading' },
      // heroesFetched: (state, action) => {
      //    state.heroesLoadingStatus = 'idle';
      //    state.heroes = action.payload;
      // },
      // heroesFetchingError: state => { state.heroesLoadingStatus = 'error' },
      heroAdded: (state, action) => {
         state.heroes.push(action.payload);
      },
      heroesDeleted: (state, action) => { state.heroes = state.heroes.filter(item => item.id !== action.payload) }
   },
   extraReducers: (bilder) => {
      bilder
         .addCase(fecthHeroes.pending, state => { state.heroesLoadingStatus = 'loading' })
         .addCase(fecthHeroes.fulfilled, (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
         })
         .addCase(fecthHeroes.rejected, state => { state.heroesLoadingStatus = 'error' })
         .addDefaultCase(() => { })
   }
});

const { reducer, actions } = heroesSlice;

export default reducer;
export const { heroesFetching, heroesFetched, heroesFetchingError, heroAdded, heroesDeleted } = actions;

