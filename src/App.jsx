import React, { useState, useEffect } from "react";

import Search from "./Search";

const getUser = () =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: 1,
          name: "Alexandr Awdeev",
        }),
      0
    );
  });

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  return (
    <div>
      {user && <h2 className="user-title">Logged in as {user.name}</h2>}
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
