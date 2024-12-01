import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animes, onAnimeClick }) => {
  return (
    <div className="trending-now">
      <h2 className="trending-title">Pick your favorite anime</h2>
      <div className="anime-container">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            onClick={() => onAnimeClick(anime)} // Pass clicked anime to parent
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
