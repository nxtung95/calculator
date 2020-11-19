import React from 'react';
import './Body.css';
import Clear from '../clear/Clear';
import Equal from '../operator/Equal';
import Add from '../operator/Add';
import Number from '../number/Number';
import Subtract from '../operator/Subtract';
import Multiply from '../operator/Multiply';
import Divide from '../operator/Divide';

const body = (props) => {
    return (
        <div className='body'>
            <Clear callback={props.clear} />
            <Equal number={props.number} calculate={props.calculate}/>
            <Add callback={props.callback} />
            <Number number={7} callback={props.callback} />
            <Number number={8} callback={props.callback} />
            <Number number={9} callback={props.callback} />
            <Subtract callback={props.callback} />
            <Number number={4} callback={props.callback} />
            <Number number={5} callback={props.callback} />
            <Number number={6} callback={props.callback} />
            <Multiply callback={props.callback} />
            <Number number={1} callback={props.callback} />
            <Number number={2} callback={props.callback} />
            <Number number={3} callback={props.callback} />
            <Divide callback={props.callback} />
        </div>
    );
}

export default body;