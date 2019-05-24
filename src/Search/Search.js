import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';
import filters from '../_utils/Filters';
import Filter from "../Filter/Filter";
import {pokemonTypes} from "../_utils/Pokemon";

class Search extends Component {
    constructor(props) {
        super(props);
        this.allPokemons = this.props.pokemons;

        this.state = {
            pokemons: this.allPokemons
        };

        this.criteria = {
            searchQuery: '',
            sort: {
                key: 'id',
                direction: 'ascending'
            },
            filter: {
                collected: filters.SHOW_ALL
            },
            chosenTypes: pokemonTypes
        };

        this.handleSorting = this.handleSorting.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleFilterCollected = this.handleFilterCollected.bind(this);
        this.handlePokemonStateChange = this.handlePokemonStateChange.bind(this);
        this.handlePokemonTypesChange = this.handlePokemonTypesChange.bind(this)
        this.sort = this.sort.bind(this);
        this.processSearchQuery = this.processSearchQuery.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
        this.updateResults = this.updateResults.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isFetched) {
            this.allPokemons = nextProps.pokemons;
            this.updateResults();
        }
    }

    handleSearchQuery(query) {
        this.criteria.searchQuery = query;
        this.updateResults();
    }

    handlePokemonStateChange(id) {
        const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
        pokemon.collected = !pokemon.collected;
    }

    handleFilterCollected(filter) {
        this.criteria.filter.collected = filter;
        this.updateResults();
    }

    handleSorting(key, direction) {
        console.log(key)
        console.log(direction)
        this.criteria.sort.key = key;
        this.criteria.sort.direction = direction;
        this.updateResults();
    }

    sort(pokemons) {
        const key = this.criteria.sort.key;
        let isAsc = this.criteria.sort.direction === "asc";

        return pokemons.sort((a, b) => {
            if (a[key] < b[key]) return isAsc ? -1 : 1;
            if (a[key] > b[key]) return isAsc ? 1 : -1;
            return 0;
        });
    }

    applyFilters(arr) {
        let result = [];
        switch (this.criteria.filter.collected) {
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
        result = result.filter(p => this.criteria.chosenTypes.includes(p.type));
        return result;
    }

    processSearchQuery(arr) {
        const template = this.criteria.searchQuery.toLowerCase();
        const fields = ['name', 'type', 'id'];

        return arr.filter(pokemon => {
            for (let field of fields)
                if (pokemon[field].toString().toLowerCase().includes(template))
                    return true;

            return false;
        });
    }

    updateResults() {
        let result = this.applyFilters(this.allPokemons);
        result = this.processSearchQuery(result);
        result = this.sort(result);

        this.setState({
            pokemons: result
        });
    }

    handlePokemonTypesChange(types) {
        console.log(types)
        this.criteria.chosenTypes = types;
        this.updateResults();
    }

    render() {
        return (
            <div>
                <SearchInput onChange={this.handleSearchQuery}/>
                <Menu onFilterChange={this.handleFilterCollected} onSortChange={this.handleSorting}/>
                <Filter onChange={(types) => this.handlePokemonTypesChange(types)}/>
                <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched}
                               onPokemonCheck={this.handlePokemonStateChange}/>
            </div>
        );
    }
}

export default Search;