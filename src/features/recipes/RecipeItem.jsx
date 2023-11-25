import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe, getRecipeState } from '../recipe/recipeReducer';

const RecipeItem = ({ recipe }) => {
  const dispatch = useDispatch();
  const { recipe: recipeState } = useSelector(getRecipeState);

  useEffect(() => {
    localStorage.setItem('recipe', JSON.stringify(recipeState));
  }, [recipeState, recipe.title]);

  const handleRecipe = () => {
    dispatch(getRecipe(recipe.recipe_id));
  };

  return (
    <li
      onClick={handleRecipe}
      key={recipe.id}
      className={`flex items-center py-6 px-8 transition-all duration-300 border-r-[1px] border-solid border-white cursor-pointer hover:text-graylight1 translate-y-[-2px] hover:bg-greylight1 hover:translate-y-[-4px] ${
        recipe.recipe_id === recipeState.recipe_id ? 'bg-greylight2' : ''
      }`}
    >
      <figure className="flex-shrink-0 flex-grow-0 w-14 rounded-[50%] overflow-auto h-[58px] mr-5 relative block">
        <img
          className="block w-[100%] h-[100%] object-cover transition-all duration-300"
          src={recipe.image_url}
          alt={recipe.title}
        />
      </figure>
      <div className="grid w-[100%] grid-cols-[1fr_2rem] gap-x-[1px] items-center">
        <h4 className="col-span-full text-sm text-primary uppercase font-semibold overflow-ellipsis max-w-[250px] whitespace-nowrap overflow-hidden">
          {recipe.title}
        </h4>
        <p className="text-xs font-semibold uppercase text-graydark2">
          {recipe.publisher}
        </p>
      </div>
    </li>
  );
};

export default RecipeItem;
