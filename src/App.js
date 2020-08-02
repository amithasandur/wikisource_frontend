import React from 'react';
import wiki from './wiki.png';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wiki} className="App-logo" alt="logo" />
        <p>
        WikiSource
        </p>
        <input type="text" className="input" placeholder="Search..." />
        <Button variant="contained" color="primary"> Search </Button>
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
