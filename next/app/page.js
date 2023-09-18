"use client"

import { useState } from 'react';

const Homepage = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <>
      <h1>📠 Calculateur 3000</h1>

      <form>
        <input
          type="number"
          onChange={e => setA(+e.target.value)}
        />
        +
        <input
          type="number"
          onChange={e => setB(+e.target.value)}
        />
        =
        <span>{a + b}</span>
      </form>
    </>
  );
};

export default Homepage;
