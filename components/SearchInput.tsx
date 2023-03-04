import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchInput = ({ placeholder, value, onChange,labelName }) => (
  <div className='mt-1 relative rounded-md shadow-sm w-full  space-y-2'>
    <label className="relative text-sm font-medium text-gray-700 text-left"
      htmlFor="search">
      {labelName}
    </label>
    <div className="relative text-gray-600 focus-within:text-gray-400">

      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <BiSearchAlt />
        </button>
      </span>

      <input
        className="border border-gray-200 border-solid rounded-md py-3 px-4 w-full bg-white"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default SearchInput;
