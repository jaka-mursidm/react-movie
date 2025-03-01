import { useState } from "react";

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 w-12 h-12 rounded-full flex justify-center items-center">
        <i className="fa-solid fa-magnifying-glass text-white"></i>{" "}
      </div>
      <input
        type="text"
        className=" w-full h-12 bg-tranparent pr-3 pl-12 py-2 border-[1px] border-white/30 rounded-full font-api-primary text-white focus:border-white/50"
        placeholder="Search movies..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
