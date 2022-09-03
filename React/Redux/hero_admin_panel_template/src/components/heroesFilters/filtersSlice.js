import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
   filters: [],
   filtersLoadingStatus: 'idle',
   activeFilter: 'all',
}

export const fecthFilters = createAsyncThunk(
   'filters/fetchFilters',
   () => {
      const { request } = useHttp();
      return request("http://localhost:3001/filters")
   }
)

const filtersSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      // filtersFetching: state => { state.filtersLoadingStatus = 'loading' },
      // filtersFetched: (state, action) => {
      //    state.filters = action.payload;
      //    state.filtersLoadingStatus = 'idle';
      // },
      // filtersFetchingError: state => { state.filtersLoadingStatus = 'error' },
      filtersChange: (state, action) => { state.activeFilter = action.payload }
   }, extraReducers: (builder) => {
      builder
         .addCase(fecthFilters.pending, state => { state.filtersLoadingStatus = 'loading' })
         .addCase(fecthFilters.fulfilled, (state, action) => {
            state.filters = action.payload;
            state.filtersLoadingStatus = 'idle';
         })
         .addCase(fecthFilters.rejected, state => { state.filtersLoadingStatus = 'error' })
   }
})

const { reducer, actions } = filtersSlice;

export default reducer;
export const { filtersFetching, filtersFetched, filtersFetchingError, filtersChange } = actions;