import React from 'react';
import {Hello} from './Hello';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello name="Johnny"/>
    </div>
  );
}

export default App;