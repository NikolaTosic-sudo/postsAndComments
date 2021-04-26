import React from 'react';

const WithClass = ({classes, children}) => (
    <div className={classes}>
        {children}
    </div>
);

export default WithClass