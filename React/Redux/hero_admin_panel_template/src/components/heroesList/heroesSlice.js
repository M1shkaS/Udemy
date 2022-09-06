import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

// Нельзя тут в этом файлике работать со store т.к он ещё не создастся


const heroesAdapter = createEntityAdapter()
// const initialState = {
//    heroes: [],
//    heroesLoadingStatus: 'idle',
// }

// Генерируем наше новое  начальное состояние , но на основании адаптера 
// состоит из двух полей idc и entities, но можно добавить ещё как ниже с помощью {}
const initialState = heroesAdapter.getInitialState({ heroesLoadingStatus: 'idle' })

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
         // state.heroes.push(action.payload);
         heroesAdapter.addOne(state, action.payload)
      },
      heroesDeleted: (state, action) => {
         // state.heroes = state.heroes.filter(item => item.id !== action.payload)
         heroesAdapter.removeOne(state, action.payload)
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fecthHeroes.pending, state => { state.heroesLoadingStatus = 'loading' })
         .addCase(fecthHeroes.fulfilled, (state, action) => {
            state.heroesLoadingStatus = 'idle';
            heroesAdapter.setAll(state, action.payload);
            // state.heroes = action.payload;
         })
         .addCase(fecthHeroes.rejected, state => { state.heroesLoadingStatus = 'error' })
         .addDefaultCase(() => { })
   }
});

const { reducer, actions } = heroesSlice;

export default reducer;

const { selectAll } = heroesAdapter.getSelectors(state => state.heroes);

// Создаёт мемоизированное значение, которое будет проверять, если изменился state, то запустит, если нет то не запустит
export const filteredHeroesSelector = createSelector(
   // state => state.heroes.heroes,
   selectAll,
   state => state.filters.activeFilter,
   (heroes, activeFilter) => {
      if (activeFilter === 'all') {
         return heroes
      } else {
         return heroes.filter(item => item.element === activeFilter)
      }
   }
)

export const { heroesFetching, heroesFetched, heroesFetchingError, heroAdded, heroesDeleted } = actions;

