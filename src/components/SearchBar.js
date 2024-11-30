import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // State to store the search query

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    onSearch(query); // Trigger the search function passed from the parent (App.js)
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for an anime..."
          value={query} // Controlled input using state
          onChange={(e) => setQuery(e.target.value)} // Update state as the user types
          className="search-bar"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
