import React from 'react';

const scaleName = {
  c: 'celcius',
  f: 'farenheit'
}

class TemperatureInput extends React.Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }

  render () {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>
          Temperature in {scaleName[scale]}:
        </legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        ></input>
      </fieldset>
    );
  }
}

export default TemperatureInput;
