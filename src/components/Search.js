import React from "react";

function Search({ search, onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  console.log(search);
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onSearch}
      />

      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
