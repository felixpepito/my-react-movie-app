import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [animes, setAnimes] = useState([]); // State to store anime results
  const [loading, setLoading] = useState(false); // Tracks the loading state

  // Function to fetch anime data (general or based on search query)
  const fetchAnimeData = async (url) => {
    setLoading(true); // Show loading while fetching
    const response = await fetch(url);
    const data = await response.json();
    setAnimes(data.data); // Set the results
    setLoading(false); // Hide loading after fetching
  };

  // Fetch trending anime when the app loads
  useEffect(() => {
    fetchAnimeData('https://api.jikan.moe/v4/top/anime?limit=20');
  }, []);

  // Function to search anime based on user input
  const searchAnime = (query) => {
    if (query) {
      fetchAnimeData(`https://api.jikan.moe/v4/anime?q=${query}&limit=20`);
    } else {
      fetchAnimeData('https://api.jikan.moe/v4/top/anime?limit=20');
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={searchAnime} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AnimeList animes={animes} />
      )}
    </div>
  );
};

export default App;
