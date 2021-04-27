import React from 'react'
import PropTypes from 'prop-types'
import { logging } from "../../../assets/functions";
import './SearchBox.css'
import WithClass from "../../../hoc/WithClass";

const SearchBox = ({message, component, change}) => {
    logging(message, component);
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
    message: PropTypes.string,
    component: PropTypes.string
};

export default SearchBox