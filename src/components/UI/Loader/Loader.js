import React from 'react'
import './Loader.css'
import WithClass from "../../../hoc/WithClass";


const Loader = () => {
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

export default Loader