import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  if (favorites.length === 0) {
    return <div>No hay criptomonedas favoritas aún. <Link to="/">Volver a Inicio</Link></div>;
  }

  return (
    <div>
      <h2>Criptomonedas Favoritas</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            <Link to={`/coin/${favorite.id}`}>{favorite.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;