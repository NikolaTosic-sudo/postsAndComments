import React from 'react'
import PropTypes from 'prop-types'
import { loggin } from "../../../assets/functions";
import './SearchBox.css'

const SearchBox = ({message, component, change}) => {
    loggin(message, component);
    return (

        <div className="search-bar">
            <input type="search" name="search" required onChange={change} placeholder="     Search Posts by User's name"/>
                <button className="search-btn">
                    <span>Search</span>
                </button>
        </div>
    )
    };

SearchBox.propTypes = {
    change: PropTypes.func.isRequired,
    message: PropTypes.string,
    component: PropTypes.string
};

export default SearchBox