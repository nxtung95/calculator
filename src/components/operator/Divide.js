import React from 'react';
import './Operator.css';

const divide = (props) => {
    return (
        <div className='Operator' onClick={() => props.callback('x')}>
            <span>x</span>
        </div>
    );
}

export default divide;