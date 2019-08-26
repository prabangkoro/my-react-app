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

function toCelcius (farenheit) {
  return (farenheit - 32) * 5 / 9;
}

function toFarenheit (celcius) {
  return celcius * 9 / 5 + 32;
}

function tryConvert (temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded;
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: 0,
      scale: 'c'
    }
  }

  handleCelciusChange = (temperature) => {
    this.setState({scale: 'c', temperature});
  }

  handleFarenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  }

  render () {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'c' ? this.state.temperature : tryConvert(temperature, toCelcius);
    const farenheit = scale === 'f' ? this.state.temperature : tryConvert(temperature, toFarenheit);
    return (
      <fieldset>
        <TemperatureInput
          temperature={celcius}
          onTemperatureChange={this.handleCelciusChange}
          scale="c"
        />
        <TemperatureInput
          temperature={farenheit}
          onTemperatureChange={this.handleFarenheitChange}
          scale="f"
        />
        <BoilingVerdict
          celcius={parseFloat(celcius)}
        />
      </fieldset>
    );
  }
}

export default Calculator;
