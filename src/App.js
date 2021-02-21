import React, {useState} from 'react'
import Frase from './components/Frase/Frase'
import NovaFrase from './components/NovaFrase/NovaFrase'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Desculpas da Vez</h1>
      <Frase />
      <NovaFrase />
    </div>
  );
}

export default App;
