import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipe: JSON.parse(localStorage.getItem('recipe')) || {},
  isLoading: false,
  error: '',
};

const recipeReducer = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    getData(state, action) {
      state.isLoading = false;
      state.error = '';
      state.recipe = action.payload;
    },
    loading(state) {
      state.error = '';
      state.isLoading = true;
    },
    getError(state, action) {
      state.error = action.payload;
    },
  },
});

export const getRecipe = id => {
  return async dispatch => {
    try {
      dispatch({ type: 'recipe/loading' });

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${id}`,
      );

      if (!res.ok) throw new Error('Something went wrong');
      const data = await res.json();

      dispatch({ type: 'recipe/getData', payload: data.recipe });
    } catch (err) {
      dispatch({ type: 'recipe/getError', payload: err.message });
    }
  };
};

export const getRecipeState = state => state.recipe;

export const { error } = recipeReducer.actions;
export default recipeReducer.reducer;
