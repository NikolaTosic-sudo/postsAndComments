import React, { Component } from 'react'
import PropTypes from "prop-types";
import './Modal.css';
import Aux from '../../../hoc/Auxiliary'
import { loggin } from "../../../assets/functions";

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {

        const {message, component, show, children} = this.props;

        loggin(message, component);
        return(
            <Aux>
                <div
                    className={'Modal'}
                    style={{
                        transform: show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: show ? '1' : '0'
                    }}>
                    {children}
                </div>
            </Aux>
        )};
}

Modal.propTypes = {
    show: PropTypes.object,
    modalClosed: PropTypes.func,
    children: PropTypes.any,
    message: PropTypes.string,
    component: PropTypes.string
};


export default Modal