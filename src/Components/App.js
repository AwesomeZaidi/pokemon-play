import React, { Component } from 'react';
import PokemonContainer from '../Components/PokemonContainer/PokemonContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokemon Play</h1>
        <PokemonContainer />
      </div>
    );
  }
}

export default App;
