import React, {useState} from 'react';
import './Filter.css';
import {pokemonTypes, pokemonTypesToColors} from "../_utils/Pokemon";

const Filter = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [typeFilters, setTypeFilters] = useState(new Set(pokemonTypes));

    const toggleFilter = () => {
        setShowMenu(!showMenu);
    };

    const applyFilter = (e) => {
        const filterElement = e.target;
        const filterName = filterElement.dataset.name;
        let newFilters = typeFilters;

        if (typeFilters.has(filterName)) {
            newFilters.delete(filterName);
            filterElement.classList.add('disabled');
        } else {
            newFilters.add(filterName);
            filterElement.classList.remove('disabled');
        }

        setTypeFilters(newFilters);
        props.onChange(Array.from(newFilters));
    };

    return (
        <div className="filter">
            <div className="toggle-filter" onClick={toggleFilter}>
                <span className="filter-icon"/>
                <span className="filter-text">Filter Pokedex</span>
            </div>

            {showMenu &&
            <div className="filter-menu">
                <div className="types">
                    <span className="category-title">Pokemon Type</span>
                    <span className="category-items">
              {
                  pokemonTypes.map(type => <div
                      key={type}
                      data-name={type}
                      style={{
                          backgroundColor: pokemonTypesToColors[type],
                          border: `2px solid ${pokemonTypesToColors[type]}`
                      }}
                      onClick={applyFilter}>{type}
                  </div>)
              }
            </span>
                </div>
            </div>
            }
        </div>
    );

};

export default Filter;
