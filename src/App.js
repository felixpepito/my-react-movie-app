import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import SearchBar from './components/SearchBar';
import AnimeDetailsModal from './components/AnimeDetailsModal'; // Import the modal component
import './App.css';

const App = () => {
  const [animes, setAnimes] = useState([]); // State to store anime results
  const [loading, setLoading] = useState(false); // Tracks the loading state
  const [selectedAnime, setSelectedAnime] = useState(null); // State for selected anime

  const fetchAnimeData = async (url) => {
    setLoading(true); // Show loading while fetching
    const response = await fetch(url);
    const data = await response.json();
    setAnimes(data.data); // Set the results
    setLoading(false); // Hide loading after fetching
  };

  useEffect(() => {
    fetchAnimeData('https://api.jikan.moe/v4/top/anime?limit=20');
  }, []);

  const searchAnime = (query) => {
    if (query) {
      fetchAnimeData(`https://api.jikan.moe/v4/anime?q=${query}&limit=20`);
    } else {
      fetchAnimeData('https://api.jikan.moe/v4/top/anime?limit=20');
    }
  };

  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime); // Set the clicked anime as selected
  };

  const closeModal = () => {
    setSelectedAnime(null); // Clear selected anime to close the modal
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={searchAnime} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AnimeList animes={animes} onAnimeClick={handleAnimeClick} />
      )}
      {selectedAnime && (
        <AnimeDetailsModal anime={selectedAnime} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
