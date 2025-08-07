import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    // Ajout de la balise Tailwind CSS via CDN dans l'en-tête
    const tailwindCDN = document.createElement('link');
    tailwindCDN.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    tailwindCDN.rel = 'stylesheet';
    document.head.appendChild(tailwindCDN);

    // Nettoyage lors du démontage du composant
    return () => {
      document.head.removeChild(tailwindCDN);
    };
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
