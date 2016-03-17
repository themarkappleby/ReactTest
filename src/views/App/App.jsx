import React from 'react';
import Header from '../../components/Header/Header.jsx';

const App = props => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default App;
