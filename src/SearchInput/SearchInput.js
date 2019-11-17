import React, {useState} from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const query = e.target.value;
        setValue(query);
        props.onChange(query);
    };

    const handleClear = (e) => {
        e.preventDefault();
        setValue('');
        props.onChange('');
    };

    return (
        <form className="search" onSubmit={(e) => e.preventDefault()}>
            <div className="search-box">
                <input type="text" placeholder="Search" value={value} onChange={handleChange}/>
                <div className="icon"/>
                <a href="#" className={value !== '' ? "clear visible" : "clear"} onClick={handleClear}/>
            </div>
        </form>
    );
};

export default SearchInput;
