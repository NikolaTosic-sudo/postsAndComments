import React from 'react'
import PropTypes from 'prop-types'
import { logging } from "../assets/functions";

const SinglePost = ({body, message, component, click}) => {

    logging(message, component);
    return (
        <p onClick={click} className='post'>{body}</p>
    )
};

SinglePost.propTypes = {
    body: PropTypes.string,
    click: PropTypes.func.isRequired,
    message: PropTypes.string,
    component: PropTypes.string
};

export default SinglePost