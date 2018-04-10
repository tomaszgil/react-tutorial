import React, { Component } from 'react';
import './Menu.css';
import CustomCheckbox from './../CustomCheckbox/CustomCheckbox';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);

    this.state = {
      checked: 0
    };

    this.filters = ['show all', 'only collected', 'not collected'];
    this.checkedClass = 'checked';
  }

  handleCheckboxClick(index) {
    this.setState({
      checked: index
    });

    let pokemons = [];
    switch(this.filters[index]) {
      case 'show all': pokemons = this.props.pokemons; break;
      case 'only collected': pokemons = this.props.pokemons.filter(pokemon => pokemon.collected); break;
      case 'not collected': pokemons = this.props.pokemons.filter(pokemon => !pokemon.collected); break;
      default: pokemons = this.props.pokemons; break;
    }

    this.props.onFilter(pokemons);
  }

  render() {
    return (
      <div className="menu">
        <form className="categories" onSubmit={(e) => e.preventDefault()}>
          {
            this.filters.map((label, index) => {
              const checked = index === this.state.checked;
              return (
                <CustomCheckbox key={index} order={index} checked={checked} label={label} onClick={this.handleCheckboxClick} />
              );
            })
          }
        </form>
        <div className="sort-by">
          <div className="sorting-title">Sort by</div>
          <select className="sorting-category">
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="type">type</option>
            <option value="stats">stats</option>
          </select>
          <select className="sorting-direction">
            <option value="ascending">low to high</option>
            <option value="descending">high to low</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Menu;