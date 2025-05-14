import React from "react";

function SearchInput({ placeholder, searchValue, setSearchValue, onClick }) {
  return (
    <div className="my-4">
      <div className="relative">
        <input
          type="search"
          id="search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          required
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={onClick}
        >
          Arama Yap
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
