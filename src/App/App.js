import React, {useEffect, useRef, useState} from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './App.css';

const App = () => {
  const apiAccessKey = 'RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh';

  const [isFetched, setIsFetched] = useState(false);

  const allPokemons = useRef([]);

  useEffect(() => { fetchPokemons() }, []);

  const fetchPokemons = () => {
    fetch(`https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=${apiAccessKey}`)
      .then(blob => blob.json())
      .then(data => {
          allPokemons.current = data.map(element => ({
            name: element.name,
            id: element.id,
            img: element.image,
            type: element.types[0],
            collected: false
        }));
        setIsFetched(true);
      })
      .catch(err => console.error(err));
  };


  return (
    <div className="app">
      <Logo />
      <Search pokemons={allPokemons.current} isFetched={isFetched} />
    </div>
  );
};

export default App;
