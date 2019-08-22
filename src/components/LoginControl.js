import React from 'react';
import Greeting from './Greeting'

function LogInButton (props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogOutButton (props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false
    });
  }

  handleLogIn = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting
          isLoggedIn={isLoggedIn}
        />
        {isLoggedIn ? (
          <LogOutButton onClick={this.handleLogOut} />
        ) : (
          <LogInButton onClick={this.handleLogIn} />
        )}
      </div>
    );
  }
}

export default LoginControl;
