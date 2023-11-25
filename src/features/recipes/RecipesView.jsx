import { useSelector } from 'react-redux';

import { getRecipesState } from './recipesReducer';

import Spinner from '../../UI/Spinner';
import RecipeItem from './RecipeItem';
import CopyRight from '../../UI/CopyRight';
import Pagination from '../../UI/Pagination';
import Error from '../../UI/Error';
import Empty from '../../UI/Empty';

const RecipesView = () => {
  const { isLoading, error, currentRecipes } = useSelector(getRecipesState);

  if (isLoading) return <Spinner />;
  if (error) return <Error>{error}</Error>;
  if (!currentRecipes.length) return <Empty />;

  return (
    <div className="flex flex-col py-8 px-0 justify-between">
      <ul className="list-none mb-5">
        {currentRecipes.map(recipe => (
          <RecipeItem key={recipe.recipe_id} recipe={recipe} />
        ))}
      </ul>

      <div>
        <Pagination />
        <CopyRight />
      </div>
    </div>
  );
};

export default RecipesView;
