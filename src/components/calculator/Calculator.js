import React from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict (props) {
  const celcius = props.celcius;
  if (celcius >= 100) {
    return <p>Boiling!</p>;
  } else {
    return <p>Not Boiling ~~~</p>;
  }
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: 0
    }
  }

  render () {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
        <BoilingVerdict
          celcius={parseFloat(temperature)}
        />
      </fieldset>
    );
  }
}

export default Calculator;
