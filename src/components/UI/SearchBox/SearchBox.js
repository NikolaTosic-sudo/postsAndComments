import React from 'react'
import PropTypes from 'prop-types'
import './SearchBox.css'
import WithClass from "../../../hoc/WithClass";

const SearchBox = ({change}) => {
    return (

        <WithClass classes="search-bar">
            <input type="search" name="search" required onChange={change} placeholder="     Search Posts by User's name"/>
                <button className="search-btn">
                    <span>Search</span>
                </button>
        </WithClass>
    )
    };

SearchBox.propTypes = {
    change: PropTypes.func.isRequired,
};

export default SearchBox