import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = (props) => {
    return (
        <div>
            <ComponentC {...props} />
        </div>
    );
};

export default ComponentB;