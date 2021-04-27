import React from 'react'
import PropTypes from 'prop-types'
import { logging } from "../assets/functions";

const SingleComment = ({body, message, component}) => {

    logging(message, component);
    return (
        <p className='comment'>{body}</p>
    )
};

SingleComment.propTypes = {
    body: PropTypes.string,
    message: PropTypes.string,
    component: PropTypes.string
};

export default SingleComment