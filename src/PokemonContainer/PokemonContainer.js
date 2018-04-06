import React, { Component } from 'react';
import Pokemon from '../Pokemon/Pokemon';

const PokemonContainer = ({ pokemons, isFetched, onPokemonCheck }) => {
    const pokemonsComponents = pokemons
      .map(pokemon => <Pokemon key={pokemon.id} {...pokemon} onPokemonCheck={onPokemonCheck} />);

    if (!isFetched) return <p className="pokemon-container-loading">Loading...</p>;

    return (
      <ul className="pokemon-container">
        {pokemonsComponents}
      </ul>
    );
};

export default PokemonContainer;