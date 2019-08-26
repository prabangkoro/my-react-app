import React from 'react';

function SplitScreen (props) {
  return (
    <div>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
}

function SideBar () {
  return <div style={{color: 'blue'}}>SideBar</div>;
}

function Content () {
  return <div style={{color: 'red'}}>Content</div>;
}

function Composition () {
  return (
    <SplitScreen
      left={<SideBar />}
      right={<Content />}
    />
  );
}

export default Composition;
