import React from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = (props) => {

    const checkedClass = 'checked';

    const getClassName = () => {
        return props.checked ? `custom-checkbox ${checkedClass}` : 'custom-checkbox';
    };

    return (
        <div className={getClassName()} onClick={() => props.onClick(props.id)}>
            <input type="checkbox" defaultChecked={props.checked}/>
            <span className="radio"/>
            <label>{props.label}</label>
        </div>
    );

};

export default CustomCheckbox;
