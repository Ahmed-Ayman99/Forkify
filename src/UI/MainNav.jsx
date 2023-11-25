import { FiBookmark, FiEdit } from 'react-icons/fi';
import Empty from './Empty';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getRecipesState } from '../features/recipes/recipesReducer';
import RecipeItem from '../features/recipes/RecipeItem';
import Modal from './Modal';
import FormAddRecipe from './FormAddRecipe';

const MainNav = () => {
  const { bookmarks } = useSelector(getRecipesState);
  const [showList, setShowList] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <nav className="self-stretch mr-[26px] ">
      <ul className="list-none flex h-[100%]">
        <li>
          <button
            onClick={() => setShowAddForm(true)}
            className="h-[100%] flex text-inherit cursor-pointer text-sm font-semibold uppercase border-none py-0 px-4 items-center transition-all duration-300 hover:bg-greylight2"
          >
            <FiEdit className="h-6 w-6 stroke-primary mr-2 translate-x-[-1px]" />
            add recipe
          </button>
          {showAddForm && (
            <Modal onClose={() => setShowAddForm(false)}>
              <FormAddRecipe onClose={() => setShowAddForm(false)} />
            </Modal>
          )}
        </li>
        <li
          onMouseEnter={() => setShowList(true)}
          onMouseLeave={() => setShowList(false)}
          className="relative"
        >
          <button className="h-[100%] flex text-inherit cursor-pointer text-base font-semibold uppercase border-none py-0 px-4 items-center transition-all duration-300 hover:bg-greylight2  ">
            <FiBookmark className="h-6 w-6 stroke-primary mr-2 translate-x-[-1px]" />
            bookmarks
          </button>
          {showList && (
            <ul
              className={`absolute top-[100%] right-[-26px] w-96 z-50 bg-white transition-all duration-500  `}
            >
              {bookmarks.length > 0 ? (
                bookmarks.map(bookmark => (
                  <RecipeItem key={bookmark.recipe_id} recipe={bookmark} />
                ))
              ) : (
                <Empty>Start by searching for a recipes and bookmark it!</Empty>
              )}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
