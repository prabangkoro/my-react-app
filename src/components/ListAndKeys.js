import React from 'react';

function ListAndKeys (props) {
  const numbers = props.numbers || [];

  return (
    <ul>
      {numbers.map((number, index) => 
        <li key={index}>{number}</li>
      )}
    </ul>
  );
}

export default ListAndKeys;
