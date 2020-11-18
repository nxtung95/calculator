import React from 'react';
import './Operator.css';

const multiply = (props) => {
    return (
        <div className='Operator' onClick={() => props.callback(':')}>
            <span>:</span>
        </div>
    );
}

export default multiply;