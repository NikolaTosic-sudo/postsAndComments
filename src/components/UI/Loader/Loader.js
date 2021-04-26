import React from 'react'
import PropTypes from "prop-types";
import './Loader.css'
import { loggin } from "../../../assets/functions";


const Loader = ({message, component}) => {

        loggin(message, component);
        return(
            <div className="loader-container">
                <div className="loader">
                    <div className="inner one"/>
                    <div className="inner two"/>
                    <div className="inner three"/>
                </div>
            </div>
        );
    };

Loader.propTypes = {
    message: PropTypes.string,
    component: PropTypes.string
};

export default Loader