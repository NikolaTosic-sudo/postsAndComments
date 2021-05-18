import React from 'react'
import PropTypes from 'prop-types'

const SingleComment = ({body}) => {

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