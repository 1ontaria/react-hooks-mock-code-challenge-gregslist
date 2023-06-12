import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
//GET request and display all listings
// onclick event for favoirte.unfavorite... change class?
// cleicking the trash can calls on a delete request to remove lisiting
// search filter by item name

function App() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="app">
      <Header search={search} onSearch={handleSearch} />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
