import React from 'react';

function UserGreeting () {
  return (
    <h4>Welcome back...</h4>
  );
}

function GuestGreeting () {
  return (
    <h4>Please Sign up.</h4>
  );
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) return <UserGreeting />;
  return <GuestGreeting />;
}

export default Greeting;
