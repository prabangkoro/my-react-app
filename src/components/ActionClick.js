import React from 'react';

class ActionClick extends React.Component {
  handleClick (text) {
    // e.preventDefault();
    console.log(`clicked: ${text}`);
  }

  render () {
    return (
      <a href="#" onClick={() => this.handleClick('test')}>
        Click
      </a>
    );
  }
}

export default ActionClick;
