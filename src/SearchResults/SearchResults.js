import React, { Component } from 'react';
import './SearchResults.css';

// TODO 1.6. Let’s write Search Results as a function, as it doesn’t need to have its own state.
// TODO 1.7. From each element of pokemons array received from we need to create an actual Pokemon component.

// Hint. You can map over pokemon object received through props, returning Pokemon component
//       to which you will pass all pokemon object’s fields as separate props. React will know how to deal with rendering an array of components.
//       Remember to add a unique key property to the component, when you create lists of element.

// TODO 1.8. When data is not fetched, let’s have the component return:
//      <div className="pokemon-container-loading">
//        <div className="pokemon" />
//      </div>
// TODO 1.9. Otherwise, let’s return a list with a class of pokemon-container with created Pokemon components.

export default PokemonContainer;