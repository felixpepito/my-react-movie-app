import React from 'react';
import AnimeCard from './AnimeCard'; // Import AnimeCard component

const AnimeList = ({ animes }) => {
  return (
    <div className="trending-now">
      <h2 className="trending-title">Pick your favorite anime</h2> {/* Title */}
      <div className="anime-container">
        {animes.map((anime) => (
          // For each anime, render an AnimeCard component with the anime data
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
