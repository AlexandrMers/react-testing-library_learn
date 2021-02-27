import React from "react";

export default function Search({ children, value, onChange }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        placeholder="search..."
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
