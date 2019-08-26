import React from 'react';

const scaleName = {
  c: 'celcius',
  f: 'farenheit'
}

class TemperatureInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value
    });
  }

  render () {
    const temperature = this.state.temperature;
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
