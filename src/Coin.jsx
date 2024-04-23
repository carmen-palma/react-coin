import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Coin() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${id}`)
      .then(response => response.json())
      .then(data => setCoinData(data.data))
      .catch(error => console.error('Error al obtener los datos:', error));
  }, [id]);

  if (!coinData) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{coinData.name} ({coinData.symbol})</h2>
      <p>Rango: {coinData.rank}</p>
      <p>Precio: ${parseFloat(coinData.priceUsd).toFixed(2)}</p>
      <p>Capitalización de Mercado: ${parseFloat(coinData.marketCapUsd).toFixed(2)}</p>
      <p>Suministro: {parseFloat(coinData.supply).toFixed(2)}</p>
    </div>
  );
}

export default Coin;