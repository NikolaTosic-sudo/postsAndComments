import React from 'react'
import PropTypes from "prop-types";
import './Loader.css'
import { logging } from "../../../assets/functions";


const Loader = ({message, component}) => {

        logging(message, component);
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