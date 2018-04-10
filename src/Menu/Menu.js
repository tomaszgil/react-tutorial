import React, { Component } from 'react';
import './Menu.css';
import CustomCheckbox from './../CustomCheckbox/CustomCheckbox';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleSortingOptionChange = this.handleSortingOptionChange.bind(this);
    this.sortWithCurrentlySelected = this.sortWithCurrentlySelected.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);

    this.state = {
      filterChecked: 0
    };

    this.filters = ['show all', 'only collected', 'not collected'];
    this.checkedClass = 'checked';
    this.sortingCategory = React.createRef();
    this.sortingDirection = React.createRef();
  }

  componentWillUpdate(nextProps) {
    if (this.props.pokemons.length !== nextProps.pokemons.length) {
      const filteredPokemons = this.filterPokemons(nextProps.pokemons, this.state.filterChecked);
      const sortedPokemons = this.sortWithCurrentlySelected(filteredPokemons);
      this.props.onFilter(sortedPokemons);
    }
  }

  handleCheckboxClick(index) {
    this.setState({
      filterChecked: index
    });

    const filteredPokemons = this.filterPokemons(this.props.pokemons, index);
    const sortedPokemons = this.sortWithCurrentlySelected(filteredPokemons);
    this.props.onFilter(sortedPokemons);
  }

  filterPokemons(pokemons, option) {
    switch(this.filters[option]) {
      case 'show all': return pokemons;
      case 'only collected': return pokemons.filter(pokemon => pokemon.collected);
      case 'not collected': return pokemons.filter(pokemon => !pokemon.collected);
      default: return pokemons;
    }
  }

  sortWithCurrentlySelected(pokemons) {
    const category = this.sortingCategory.current.value;
    const direction = this.sortingDirection.current.value;

    let multiplier = 1;
    switch(direction) {
      case 'ascending': multiplier = 1; break;
      case 'descending': multiplier = -1; break;
      default: break;
    }

    return pokemons.sort((a, b) => {
      if (a[category] < b[category]) return -1 * multiplier;
      if (a[category] === b[category]) return 0;
      if (a[category] > b[category]) return multiplier;

      return 0;
    });
  }

  handleSortingOptionChange() {
    const filteredPokemons = this.filterPokemons(this.props.pokemons, this.state.filterChecked);
    const sortedPokemons = this.sortWithCurrentlySelected(filteredPokemons);
    this.props.onFilter(sortedPokemons);
  }

  render() {
    return (
      <div className="menu">
        <form className="categories" onSubmit={(e) => e.preventDefault()}>
          {
            this.filters.map((label, index) => {
              const checked = index === this.state.filterChecked;
              return (
                <CustomCheckbox key={index} order={index} checked={checked} label={label} onClick={this.handleCheckboxClick} />
              );
            })
          }
        </form>
        <div className="sort-by">
          <div className="sorting-title">Sort by</div>
          <select className="sorting-category" ref={this.sortingCategory} onChange={this.handleSortingOptionChange}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="type">type</option>
          </select>
          <select className="sorting-direction" ref={this.sortingDirection} onChange={this.handleSortingOptionChange}>
            <option value="ascending">low to high</option>
            <option value="descending">high to low</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Menu;