import React from 'react';
import './Input.css';

const input = (props) => {
    return (
        <div className='input'>
            <span>{props.number}</span>
        </div>
    );
}

export default input;