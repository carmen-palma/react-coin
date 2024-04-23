import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then(response => response.json())
      .then(data => setCryptos(data.data))
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div>
      <h2>Principales Criptomonedas</h2>
      <ul>
        {cryptos.map(crypto => (
          <li key={crypto.id}>
            <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;