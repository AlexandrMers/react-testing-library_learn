import React from "react";

export default function Search({ children, value, onChange }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        placeholder="search text..."
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
