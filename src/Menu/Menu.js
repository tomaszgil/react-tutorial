import React, {useState} from 'react';
import './Menu.css';
import CustomCheckbox from './../CustomCheckbox/CustomCheckbox';
import filters from './../_utils/Filters';

const filtersList = [
    filters.SHOW_ALL,
    filters.ONLY_COLLECTED,
    filters.NOT_COLLECTED
];

const Menu = (props) => {
    const [filterChecked, setFilterChecked] = useState(filters.SHOW_ALL);

    const sortingCategory = React.createRef();
    const sortingDirection = React.createRef();

    const handleCheckboxClick = (filter) => {
        setFilterChecked(filter);
        props.onFilterChange(filter);
    };

    const handleSortingOptionChange = () => {
        const category = sortingCategory.current.value;
        const direction = sortingDirection.current.value;
        props.onSortChange(category, direction);
    };

    return (
        <div className="menu">
            <form className="categories" onSubmit={(e) => e.preventDefault()}>
                {
                    filtersList.map((label, index) => {
                        const checked = label === filterChecked;
                        return (
                            <CustomCheckbox key={index} id={label} checked={checked} label={label}
                                            onClick={handleCheckboxClick}/>
                        );
                    })
                }
            </form>
            <div className="sort-by">
                <div className="sorting-title">Sort by</div>
                <select className="sorting-category" ref={sortingCategory} onChange={handleSortingOptionChange}>
                    <option value="id">id</option>
                    <option value="name">name</option>
                    <option value="type">type</option>
                </select>
                <select className="sorting-direction" ref={sortingDirection} onChange={handleSortingOptionChange}>
                    <option value="ascending">low to high</option>
                    <option value="descending">high to low</option>
                </select>
            </div>
        </div>
    );
};

export default Menu;
