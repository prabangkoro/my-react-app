import React from 'react';

class Forms extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  submitForm = (event) => {
    console.log(`form submitted. data: ${this.state.name}`)
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  render () {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input
          type="submit"
          value="Submit"
        ></input>
      </form>
    );
  }
}

export default Forms;
