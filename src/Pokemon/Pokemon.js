import React, {useState} from 'react';
import './Pokemon.css'
import {pokemonTypesToColors} from "../_utils/Pokemon";

const Pokemon = (props) => {
    const [collected, setCollected] = useState(props.collected);

    const handlePokeballClick = (e) => {
        e.preventDefault();
        setCollected(!collected);
        props.onPokemonCheck(props.id);
    };

    const style = {
        background: pokemonTypesToColors[props.type]
    };

    return (
        <li className={collected ? "pokemon collected" : "pokemon"}>
            <div className="wrapper">
                <div className="img-background" style={style}/>
                <img src={props.img} alt="Pokemon image"/>
            </div>
            <div className="information">
                <a href="#" className="pokeball" onClick={handlePokeballClick}/>
                <span className="name">{props.name}</span>
                <span>
          <span className="type">{props.type}</span>
          <span className="id">{props.id}</span>
        </span>
            </div>
        </li>
    );
};

export default Pokemon;
