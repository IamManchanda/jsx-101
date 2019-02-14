import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const helloWorld = 'Hello React World';
  return <Fragment>
    <h3>{ helloWorld }</h3>
  </Fragment>;
};

ReactDOM.render(<App />, document.getElementById('root'));
