import React from 'react';
import Clock from './components/Clock'
import Counter from './components/Counter'
import ActionClick from './components/ActionClick'
import LoginControl from './components/LoginControl'
import ListAndKeys from './components/ListAndKeys'
import Forms from './components/Forms'
import LiftingState from './components/LiftingState'

function formatUser ({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
const user = {
  firstName: 'bagus',
  lastName: 'prabangkoro'
}

const imgUrl = 'https://picsum.photos/200/300';
function ImgCustom ({ src }) {
  return (
    <img src={src} />
  );
}

function Welcome ({ name }) {
  return <p>hi, { name }!</p>;
}

export default function App () {
  const numbers = [1, 23, 2, 5 , 7, 9];
  return (
    <div>
      <h1>
        Hello, { formatUser(user) }
      </h1>
      <Welcome name='bambang' />
      <Welcome name='alice' />
      <ImgCustom src={imgUrl}/>
      <Clock />
      <Counter />
      <ActionClick />
      <div>
        <h1>Conditional Rendering</h1>
        <LoginControl />
      </div>
      <div>
        <h1>List and Keys</h1>
        <ListAndKeys
          numbers={numbers}
        />
      </div>
      <div>
        <h1>Forms</h1>
        <Forms />
      </div>
      <div>
        <h1>Lifting State Up</h1>
        <LiftingState />
      </div>
    </div>
  );
}