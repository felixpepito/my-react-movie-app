import React from 'react';

const AnimeCard = ({ anime, onClick }) => {
  return (
    <div className="anime-card" onClick={onClick}>
      <img
        src={anime.images?.jpg?.image_url || 'https://via.placeholder.com/150'}
        alt={anime.title}
        className="anime-poster"
      />
      <h3 className="anime-title">{anime.title}</h3>
      <p className="anime-details">Episodes: {anime.episodes || 'Unknown'}</p>
      <p className="anime-details">
        Release Date: {anime.aired?.string || 'Unknown'}
      </p>
    </div>
  );
};

export default AnimeCard;
