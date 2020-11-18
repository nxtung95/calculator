import React from 'react';
import './Number.css';

class Number extends React.Component {
    handleNumber = () => {
        this.props.callback(this.props.number);
    }

    render() {
        return (
            <div className="number" onClick={this.handleNumber}>
                <span>{this.props.number}</span>
            </div>
        );
    }
}

export default Number;