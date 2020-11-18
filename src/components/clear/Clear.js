import React from 'react';
import './Clear.css';

const clear = (props) => {
    return (
        <div className='clear' onClick={props.callback}>
            <span>Clear</span>
        </div>
    );
}

export default clear;