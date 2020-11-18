import React from 'react';
import './Operator.css';

class Equal extends React.Component {
    render() {
        return (
            <div className='Operator' onClick={this.calculate}>
                <span>=</span>
            </div>
        );
    }

    calculate = () => {
        let number = this.props.number;
        console.log(number);
        //... calculate
        let result = 432;
        this.props.callback(result);
    }
}

export default Equal;