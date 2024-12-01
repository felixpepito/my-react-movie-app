import React from 'react';

const AnimeDetailsModal = ({ anime, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img
          src={anime.images?.jpg?.image_url || 'https://via.placeholder.com/150'}
          alt={anime.title}
          className="modal-poster"
        />
        <h2>{anime.title}</h2>
        <p><strong>Episodes:</strong> {anime.episodes || 'Unknown'}</p>
        <p><strong>Release Date:</strong> {anime.aired?.string || 'Unknown'}</p>
        <p><strong>Synopsis:</strong> {anime.synopsis || 'No synopsis available.'}</p>
      </div>
    </div>
  );
};

export default AnimeDetailsModal;
