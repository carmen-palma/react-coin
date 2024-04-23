import React from 'react';
import Navbar from './Navbar';

function Root({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Root;