

// src/App.js
import React from 'react';
import './App.css';
import ShoppingList from './Components/ShoppingList';
import ItemForm from './components/ItemForm';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <h1>Shopping List App</h1>
      <ShoppingList />
    </div>
  );
}

export default App;
