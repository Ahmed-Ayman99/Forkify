import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { FiClock, FiUsers } from 'react-icons/fi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

import { addBookmarked } from '../features/recipes/recipiesReducer';
import { getRecipesState } from '../features/recipes/recipiesReducer';

const Details = () => {
  const { recipe } = useSelector(state => state.recipe);
  const { bookmarked } = useSelector(getRecipesState);
  const dispatch = useDispatch();

  const existed = bookmarked
    ?.map(bookmark => bookmark?.recipe_id)
    .includes(recipe.recipe_id);

  const handleBookmark = () => dispatch(addBookmarked(recipe));

  useEffect(() => {
    localStorage.setItem('bookmarked', JSON.stringify(bookmarked));
  }, [bookmarked]);

  return (
    <div className="flex items-center pl-[75px] pr-[35px] py-20 ">
      <div className="flex items-center mr-[45px]">
        <FiClock className="stroke-primary w-[23.5px] h-[23.5px] mr-[11.5px]" />
        <span className="font-bold mr-[5px]">60</span>
        <span className="uppercase text-lg">MINUTES</span>
      </div>

      <div className="flex text-base items-center uppercase mr-[45px]">
        <FiUsers className="stroke-primary mr-[23.5px] w-[23.5px] h-[23.5px]" />
        <span className="mr-[5px] font-bold">4</span>
        <span className="uppercase text-base">SERVINGS</span>
        <div className="flex items-center ml-3">
          <button className="border-none bg-none cursor-pointer h-[23.5px] w-[23.5px]">
            <AiOutlinePlusCircle className=" fill-primary h-[100%] w-[100%] transition-all duration-300" />
          </button>
          <button className="border-none bg-none cursor-pointer h-[23.5px] w-[23.5px]">
            <AiOutlineMinusCircle className="fill-primary h-[100%] w-[100%] transition-all duration-300" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end  flex-grow">
        <button
          onClick={handleBookmark}
          className="bg-primary bg-gradient-to-br from-grad1 to-grad2 rounded-[50%] border-none cursor-pointer w-[45px] h-[45px] transition-all duration-200 flex items-center justify-center hover:scale-110"
        >
          {existed ? (
            <FaBookmark className="h-[23.5px] w-[23.5px] fill-white" />
          ) : (
            <FaRegBookmark className="h-[23.5px] w-[23.5px] fill-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Details;
