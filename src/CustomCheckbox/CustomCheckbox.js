import React, { Component } from 'react';
import './CustomCheckbox.css';

class CustomCheckbox extends Component {
  constructor(props) {
    super(props);

    this.checkedClass = 'checked';
    this.getClassName = this.getClassName.bind(this);
  }

  getClassName() {
    return this.props.checked ? `custom-checkbox ${this.checkedClass}` : 'custom-checkbox';
  }

  render() {
    return (
      <div className={this.getClassName()} onClick={() => this.props.onClick(this.props.id)}>
        <input type="checkbox" defaultChecked={this.props.checked} />
        <span className="radio" />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default CustomCheckbox;