import React from 'react';
import './CalculatorApp.css';
import Input from './components/input/Input';
import Body from './components/body/Body';

class CalculatorApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
        };
    }

    handle = (e) => {
        this.setState({
            number: `${this.state.number}${e}`,
        });
    }

    clear = () => {
        this.setState({
            number: 0,
        });
    }

    calculate = (result) => {
        this.setState({ number: result });
    }

    render() {
        return (
            <div className='CalculatorApp'>
                <Input number={this.state.number} />
                <Body callback={this.handle} clear={this.clear} number={this.state.number} calculate={this.calculate} />
            </div>
        );
    }
}

export default CalculatorApp;