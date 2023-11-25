import { AiOutlineCheck } from 'react-icons/ai';

import Heading from './Heading';

const Ingredients = ({ ingredients }) => {
  return (
    <div className="flex flex-col items-center bg-graylight2 leading-[1.4] text-sm py-[50px] px-20">
      <Heading>RECIPE INGREDIENTS</Heading>
      <ul className="grid grid-cols-[1fr_1fr] gap-x-[25px] gap-y-[30px] list-none">
        {ingredients.map((ingredient, ind) => (
          <li key={ind} className="flex">
            <p>
              <AiOutlineCheck className="w-5 h-5 fill-primary mr-[11px] mt-[1px]" />
            </p>
            <p>{ingredient}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
