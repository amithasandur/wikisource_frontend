import React from 'react';
import wiki from './wiki.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wiki} className="App-logo" alt="logo" />
        <p>
        WikiSource
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Wikipedia:Multiyear_ranking_of_most_viewed_pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Most popular Wikipedia articles
        </a>
      </header>
    </div>
  );
}

export default App;
