import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchInput = ({ placeholder, value, onChange,labelName }) => (
  <div className="grid grid-flow-row gap-2 text-sm">
    <label 
      htmlFor="search" className="font-grotesk">
      {labelName}
    </label>
    <div className="relative text-gray-600 focus-within:text-gray-400">

      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <BiSearchAlt />
        </button>
      </span>

      <input
        className="text-grotesk h-10 w-full rounded-md bg-slate-100 p-2 pl-[17px]" 
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default SearchInput;
