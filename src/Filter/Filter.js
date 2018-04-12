import React, { Component } from 'react';
import './Filter.css';
import { pokemonTypes, pokemonTypesToColors } from "../_utils/Pokemon";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      typeFilters: new Set(pokemonTypes)
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  toggleFilter() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  applyFilter(e) {
    // filter the state representing filtered types
    // if the set contains this element, delete it from the set
    // else, add the element to the set. then update the set
    let newFilters = this.state.typeFilters;

    if (this.state.typeFilters.has(e.target.innerHTML)) {
      newFilters.delete(e.target.innerHTML);
      // change the class to adjust the background color
      e.target.classList.add('disabled');
    } else {
      newFilters.add(e.target.innerHTML);
      e.target.classList.remove('disabled');
    }

    this.setState({
      typeFilters: newFilters
    });
    this.props.onChange(Array.from(newFilters));
  }

  render() {
    return (
      <div className="filter">
        <div className="toggle-filter" onClick={this.toggleFilter}>
          <span className="filter-icon" />
          <span className="filter-text">Filter Pokedex</span>
        </div>

        {this.state.showMenu &&
          <div className="filter-menu">
            <div className="types">
              <span className="category-title">Pokemon Type</span>
              <span className="category-items">
              {
                pokemonTypes.map(type => <div
                    key={type}
                    style={{backgroundColor: pokemonTypesToColors[type], border: `2px solid ${pokemonTypesToColors[type]}`}}
                    onClick={this.applyFilter}>{type}
                  </div>)
              }
              </span>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Filter;