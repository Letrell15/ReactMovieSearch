import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center", marginBottom: "20px", fontSize: "25px"}}>Welcome to the React Movie Generator</h1>
        <SearchMovies />

      </div>
    )
  }
}

export default App;
