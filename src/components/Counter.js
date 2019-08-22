import React from 'react';

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  updateCounter = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }))
  }

  render () {
    const counter = this.state.counter;
    return (
      <div>
        <h4>Counter: { counter }</h4>
        <button type="button" onClick={ this.updateCounter }>Add</button>
      </div>
    );
  }
}

export default Counter;
