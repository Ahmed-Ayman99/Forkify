import Header from './UI/Header';
import RecipesView from './features/recipes/RecipesView';
import RecipeView from './features/recipe/RecipeView';
import ToasterItem from './UI/ToasterItem';

const App = () => {
  return (
    <div className="max-w-[1200px] min-h-[1170px] my-[4vw] mx-auto bg-white rounded-lg overflow-hidden grid grid-cols-[1fr_2fr] grid-rows-[100px_minmax(1000px,_auto)] shadow-md">
      <Header />
      <RecipesView />
      <RecipeView />

      <ToasterItem />
    </div>
  );
};

export default App;
