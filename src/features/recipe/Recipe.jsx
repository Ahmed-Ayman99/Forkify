import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useEffect } from 'react';
import {
  AiOutlineCheck,
  AiOutlineClockCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

import { Bookmarked, getRecipesState } from '../recipes/recipesReducer';
import { getRecipeState } from './recipeReducer';

import Empty from '../../UI/Empty';
import Error from '../../UI/Error';
import Spiner from '../../UI/Spinner';

const Recipe = () => {
  const { recipe, error, isLoading } = useSelector(getRecipeState);
  const { bookmarks } = useSelector(getRecipesState);
  const dispatch = useDispatch();

  useEffect(
    () => localStorage.setItem('forkifyRecipes', JSON.stringify(bookmarks)),
    [bookmarks],
  );

  if (!recipe.recipe_id) return <Empty />;
  if (isLoading) return <Spiner />;
  if (error) return <Error>{error}</Error>;

  const { image_url, ingredients, publisher, recipe_id, title } = recipe;
  const isBookmarked = bookmarks.some(
    bookmark => bookmark.recipe_id === recipe_id,
  );

  const handleBookmarked = () => dispatch(Bookmarked(recipe));

  return (
    <div className="bg-greylight2">
      <figure className="h-80 relative origin-top">
        <span className="block absolute h-[100%] w-[100%] inset-0  bg-gradient-to-br from-grad1 to-grad2 opacity-60"></span>
        <img className="w-[100%] h-[100%] block object-cover" src={image_url} />
        <h1 className="w-[50%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[20%] skew-y-[-6deg] font-bold text-white uppercase text-[32.5px] leading-[1.95] text-center">
          <span className="py-[13px] px-[20px] bg-gradient-to-br from-grad1 to-grad2 box-decoration-clone">
            {title}
          </span>
        </h1>
      </figure>

      <div className="flex items-center pl-[75px] pr-[35px] py-20 ">
        <div className="flex items-center mr-[45px]">
          <AiOutlineClockCircle className="w-[23.5px] h-[23.5px] mr-[11.5px] text-primary" />
          <span className="font-bold mr-[5px]">60</span>
          <span className="uppercase text-lg">MINUTES</span>
        </div>
        <div className="flex text-base items-center uppercase mr-[45px]">
          <FiUsers className="w-[23.5px] h-[23.5px] mr-[11.5px] text-primary " />
          <span className="mr-[5px] font-bold">4</span>
          <span className="uppercase text-base">SERVINGS</span>
          <div className="flex items-center ml-3">
            <button className="border-none bg-none cursor-pointer h-[23.5px] w-[23.5px]">
              <AiOutlineMinusCircle className="hover:translate-y-[-2px] fill-primary h-[100%] w-[100%] transition-all duration-300" />
            </button>
            <button className="border-none bg-none cursor-pointer h-[23.5px] w-[23.5px]">
              <AiOutlinePlusCircle className="hover:translate-y-[-2px] fill-primary h-[100%] w-[100%] transition-all duration-300" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end  flex-grow">
          <button
            onClick={handleBookmarked}
            className="bg-primary bg-gradient-to-br from-grad1 to-grad2 rounded-[50%] border-none cursor-pointer w-[45px] h-[45px] transition-all duration-200 flex items-center justify-center hover:scale-110"
          >
            {isBookmarked ? (
              <FaBookmark className="h-[23.5px] w-[23.5px] fill-white" />
            ) : (
              <FaRegBookmark className="h-[23.5px] w-[23.5px] fill-white" />
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center bg-graylight2 leading-[1.4] text-sm py-[50px] px-20">
        <h2 className="text-xl font-bold text-primary uppercase text-center mb-[25px]">
          RECIPE INGREDIENTS
        </h2>
        <ul className="grid grid-cols-[1fr_1fr] gap-x-[25px] gap-y-[30px] list-none">
          {ingredients.map((ingredient, ind) => (
            <li key={ind} className="flex justify- gap-2">
              <p>
                <AiOutlineCheck className="h-[23.5px] w-[23.5px] text-primary" />
              </p>
              <p>{ingredient}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center py-[50px] px-20">
        <h2 className="text-xl font-bold text-primary uppercase text-center mb-[25px]">
          HOW TO COOK IT
        </h2>
        <p className="text-center text-graydark2 mb-9">
          This recipe was carefully designed and tested by
          <strong> {publisher}</strong> . Please check out directions at their
          website.
        </p>
        <button className="py-4 px-10 rounded-[100px] font-semibold flex items-center justify-center text-base gap-[10px] border-none uppercase cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#fbdb89] to-[#f48982] text-white hover:scale-110">
          directions
          <HiOutlineArrowNarrowRight className="h-[23.5px] w-[23.5px]" />
        </button>
      </div>
    </div>
  );
};

export default Recipe;
