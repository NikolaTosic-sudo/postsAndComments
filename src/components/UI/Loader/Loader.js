import React from 'react'
import PropTypes from "prop-types";
import './Loader.css'
import { logging } from "../../../assets/functions";
import WithClass from "../../../hoc/WithClass";


const Loader = ({message, component}) => {

        logging(message, component);
        return(
            <WithClass classes="loader-container">
                <div className="loader">
                    <div className="inner one"/>
                    <div className="inner two"/>
                    <div className="inner three"/>
                </div>
            </WithClass>
        );
    };

Loader.propTypes = {
    message: PropTypes.string,
    component: PropTypes.string
};

export default Loader