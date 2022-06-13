import React from 'react';
import HomePage from '../../pages/home';
import { Add } from '../got/add';
import { List } from '../got/list';
import './App.css';

export function App() {
  return (
    <div className="App">
      <h2>Lista de personajes</h2>
      <Add></Add>
      <List />
    </div>
  );
}
