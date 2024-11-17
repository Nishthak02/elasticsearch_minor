import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    setResults(["Song A", "Song B", "Song C"]);
  };

  const handleFileUpload = (event) => {
    console.log("Uploaded file:", event.target.files[0]);
    setResults(["Uploaded Song X", "Uploaded Song Y"]);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Find Your Song🎵</h1>
        <p>Find your favorite songs by title, lyrics, or audio upload.</p>
      </header>
      <main className="main">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by title or lyrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
          <label htmlFor="file-upload" className="custom-file-upload">
            Upload Audio
          </label>
          <input
            id="file-upload"
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
          />
        </div>
        <div className="results-container">
          <h2>Search Results</h2>
          <ul className="results-list">
            {results.map((result, index) => (
              <li key={index} className="result-item">
                {result}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
