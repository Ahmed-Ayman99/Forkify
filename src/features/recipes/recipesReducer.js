import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  currentRecipes: [],
  bookmarks: JSON.parse(localStorage.getItem('forkifyRecipes')) || [],

  currentPage: 1,
  pageCount: 1,
  limit: 10,
  error: '',
  isLoading: false,
};

const recipesReducer = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    loading(state) {
      state.error = '';
      state.isLoading = true;
    },
    error(state, actiond) {
      state.error = actiond.payload;
      state.isLoading = false;
    },
    getData(state, actiond) {
      const start = (state.currentPage - 1) * state.limit;
      const end = state.currentPage * state.limit;

      state.error = '';
      state.isLoading = false;

      state.recipes = actiond.payload;
      state.pageCount = Math.ceil(state.recipes.length / state.limit);
      state.currentRecipes = state.recipes.slice(start, end);
    },
    getPrev(state) {
      state.currentPage -= 1;

      state.currentRecipes = state.recipes.slice(
        (state.currentPage - 1) * state.limit,
        state.currentPage * state.limit,
      );
    },
    getNext(state) {
      state.currentRecipes = state.recipes.slice(
        state.currentPage * state.limit,
        (state.currentPage + 1) * state.limit,
      );

      state.currentPage += 1;
    },
    Bookmarked(state, action) {
      const existed =
        state.bookmarks.length &&
        state.bookmarks?.some(
          bookmark => bookmark?.recipe_id === action.payload.recipe_id,
        );

      state.bookmarks = existed
        ? state.bookmarks.filter(
            bookmark => bookmark.recipe_id !== action.payload.recipe_id,
          )
        : [...state.bookmarks, action.payload];
    },
  },
});

export const getRecipes = query => {
  return async dispatch => {
    try {
      dispatch({ type: 'recipes/loading' });

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${query}`,
      );

      if (!res.ok) throw new Error('Something went wrog');
      const data = await res.json();

      dispatch({ type: 'recipes/getData', payload: data.recipes });
    } catch (err) {
      dispatch({ type: 'recipes/error', payload: err.message });
    }
  };
};

export const { getPrev, getNext, Bookmarked } = recipesReducer.actions;
export const getRecipesState = state => state.recipes;

export default recipesReducer.reducer;
