import React from 'react'
import PropTypes from 'prop-types'
import { loggin } from "../assets/functions";

const SingleComment = ({body, message, component}) => {

    //loggin(message, component);
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