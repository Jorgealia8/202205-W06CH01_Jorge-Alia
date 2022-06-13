import React from 'react';
import { Add } from '../got/add';
import { List } from '../got/list';
import './App.css';

export function App() {
  return (
    <div className="App">
      <h2>Introduce un personaje</h2>
      <Add></Add>
      <List />
    </div>
  );
}
