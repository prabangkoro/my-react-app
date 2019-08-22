import React from 'react';
import Clock from './components/Clock'
import Counter from './components/Counter'
import ActionClick from './components/ActionClick'

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
    </div>
  );
}