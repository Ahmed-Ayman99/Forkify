import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipes/recipesReducer';
import recipeReducer from './features/recipe/recipeReducer';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipe: recipeReducer,
  },
});

export default store;
