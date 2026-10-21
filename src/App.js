import React, { useState } from 'react';
import Preloader from './Preloader';
import Home from './Home';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Home />
    </>
  );
}
