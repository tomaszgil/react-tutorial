import React, { Component } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './SearchResults.css';

const PokemonContainer = ({ pokemons, isFetched }) => {
  // TODO 3.4. When creating a Pokemon component add a new prop and pass the function received thought props from the parent.
  const pokemonsComponents = pokemons
    .map(pokemon => <Pokemon key={pokemon.id} {...pokemon} />);

  if (!isFetched)
    return (
      <div className="pokemon-container-loading">
        <div className="pokemon" />
      </div>
    );

  return (
    <ul className="pokemon-container">
      {pokemonsComponents}
    </ul>
  );
};

export default PokemonContainer;