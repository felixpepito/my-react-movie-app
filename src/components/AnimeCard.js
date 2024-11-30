import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
      {/* Display the anime image or a placeholder if the image is unavailable */}
      <img
        src={anime.images?.jpg?.image_url || 'https://via.placeholder.com/150'}
        alt={anime.title}
        className="anime-poster"
      />
      {/* Display the anime title */}
      <h3 className="anime-title">{anime.title}</h3>
      {/* Display the number of episodes */}
      <p className="anime-details">
        Episodes: {anime.episodes || 'Unknown'}
      </p>
      {/* Display the release date */}
      <p className="anime-details">
        Release Date: {anime.aired?.string || 'Unknown'}
      </p>
    </div>
  );
};

export default AnimeCard;
