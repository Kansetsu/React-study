import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className='linha'>
        <Card>x</Card>
      </div>

      <div className='linha'>
        <Card>y</Card>
      </div>
    </div>
  );
}

export default App;
