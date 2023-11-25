import { useSelector, useDispatch } from 'react-redux';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import {
  getNext,
  getPrev,
  getRecipesState,
} from '../features/recipes/recipesReducer';

// import { getNext, getPrev } from '../features/recipes/recipiesReducer';

const Pagination = () => {
  const { currentPage, pageCount } = useSelector(getRecipesState);
  const dispatch = useDispatch();

  const handlePrev = () => dispatch(getPrev());

  const handleNext = () => dispatch(getNext());

  return (
    <div className="flex items-center justify-between px-4">
      {pageCount > 1 && currentPage > 1 ? (
        <button
          onClick={handlePrev}
          className="bg-greylight1  rounded-full text-primary font-semibold border-none py-2 px-3 cursor-pointer flex items-center transition-all duration-200"
        >
          <FaLongArrowAltLeft />
          <span className="mx-2">page {currentPage - 1}</span>
        </button>
      ) : (
        <span></span>
      )}
      {pageCount > 1 && currentPage < pageCount && (
        <button
          onClick={handleNext}
          className="bg-greylight1  rounded-full text-primary font-semibold border-none py-2 px-3 cursor-pointer flex items-center transition-all duration-200"
        >
          <span className="mx-2">page {currentPage + 1}</span>
          <FaLongArrowAltRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
