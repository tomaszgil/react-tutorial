import React, {useState, useEffect, useRef} from 'react';
import Menu from '../Menu/Menu';
import Filter from '../Filter/Filter';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';
import {pokemonTypes} from '../_utils/Pokemon';
import filters from '../_utils/Filters';

const initialCriteria = {
    searchQuery: '',
    sort: {
        key: 'id',
        direction: 'ascending'
    },
    filter: {
        types: pokemonTypes,
        collected: filters.SHOW_ALL
    }
};

const Search = (props) => {
    const [pokemons, setPokemons] = useState(props.pokemons);

    const allPokemons = useRef([]);
    const criteria = useRef(initialCriteria);

    useEffect(() => {
        updateResults()
    }, []);

    useEffect(() => {
        if (props.isFetched) {
            allPokemons.current = props.pokemons;
            updateResults();
        }
    }, [props]);



    const handlePokemonStateChange = (id) => {
        const pokemon = allPokemons.current.find(pokemon => pokemon.id === id);
        pokemon.collected = !pokemon.collected;
    };

    const handleSearchQuery = (query) => {
        criteria.current.searchQuery = query;
        updateResults();
    };

    const handleFilterTypes = (types) => {
        criteria.current.filter.types = types;
        updateResults();
    };

    const handleFilterCollected = (filter) => {
        criteria.current.filter.collected = filter;
        updateResults();
    };

    const handleSorting = (key, direction) => {
        criteria.current.sort.key = key;
        criteria.current.sort.direction = direction;
        updateResults();
    };

    const sort = (arr) => {
        let multiplier = 1;
        const key = criteria.current.sort.key;

        switch (criteria.current.sort.direction) {
            case 'ascending':
                multiplier = 1;
                break;
            case 'descending':
                multiplier = -1;
                break;
            default:
                break;
        }

        return arr.sort((a, b) => {
            if (a[key] < b[key]) return -1 * multiplier;
            if (a[key] === b[key]) return 0;
            if (a[key] > b[key]) return multiplier;

            return 0;
        });
    };

    const processSearchQuery = (arr) => {
        const template = criteria.current.searchQuery.toLowerCase();
        const fields = ['name', 'type', 'id'];

        return arr.filter(pokemon => {
            for (let field of fields)
                if (pokemon[field].toString().toLowerCase().includes(template))
                    return true;

            return false;
        });
    };

    const applyFilters = (arr) => {
        let result = [];
        switch (criteria.current.filter.collected) {
            case filters.SHOW_ALL:
                result = arr;
                break;
            case filters.ONLY_COLLECTED:
                result = arr.filter(el => el.collected);
                break;
            case filters.NOT_COLLECTED:
                result = arr.filter(el => !el.collected);
                break;
            default:
                result = arr;
        }
        result = result.filter(pokemon => criteria.current.filter.types.includes(pokemon.type));
        return result;
    };

    const updateResults = () => {
        let result = applyFilters(allPokemons.current);
        result = processSearchQuery(result);
        result = sort(result);
        setPokemons(result);
    };

    return (
        <div>
            <SearchInput onChange={handleSearchQuery}/>
            <Menu onFilterChange={handleFilterCollected} onSortChange={handleSorting}/>
            <Filter onChange={handleFilterTypes}/>
            <SearchResults pokemons={pokemons} isFetched={props.isFetched} onPokemonCheck={handlePokemonStateChange}/>
        </div>

    );
};

export default Search;
