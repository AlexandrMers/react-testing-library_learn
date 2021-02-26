import React, { useState } from "react";

import Search from "./Search";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
