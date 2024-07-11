import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ onSubmit, newSearchValue }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSubmit({ search: searchValue }); // Call the onSubmit prop function with the search value
  };

  useEffect(() => {
    setSearchValue(newSearchValue); // Update currentSelectedItem when selectedItem changes
  }, [newSearchValue]);

  return (
    <form className="max-w px-4 py-2" onSubmit={handleSubmit}>
      <div className="relative">
        <CiSearch className="absolute inset-y-0 left-4 my-auto text-gray-500 size-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-gra text-icon-sub-heading"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} // Update state on input change
        />
      </div>
    </form>
  );
}
