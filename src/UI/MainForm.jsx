import { useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';

import { getRecipes } from '../features/recipes/recipesReducer';
import { useState } from 'react';

const MainForm = () => {
  const [query, setQuery] = useState('pizza');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
	if(!query)return 
    dispatch(getRecipes(query));
    setQuery('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[100px] flex items-center pl-[30px] transition-all duration-300 focus-within:translate-y-[-2px] focus-within:shadow-md grow-1"
    >
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search over 1,000,000 recipes..."
        className="border-none bg-none text-inherit text-lg rounded-[100px] p-[10px] focus:outline-none placeholder:text-greylight3 w-[300px]"
        type="text"
      />
      <button className="py-4 px-10 rounded-[100px] font-semibold flex items-center justify-center text-base gap-[10px] border-none uppercase cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#fbdb89] to-[#f48982] text-white hover:scale-110">
        <AiOutlineSearch className="text-white text-2xl  fill-current" />
        Search
      </button>
    </form>
  );
};

export default MainForm;
