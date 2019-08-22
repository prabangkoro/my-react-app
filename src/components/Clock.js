import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount () {
    this.clockUpdaterId = setInterval(() => {
      this.updateClock()
    }, 500);
  }

  componentWillUnmount () {
    clearInterval(this.clockUpdaterId);
  }

  updateClock () {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <div>
        <h2>Time: { this.state.date.toLocaleTimeString() }</h2>
      </div>
    );
  }
}

export default Clock;
