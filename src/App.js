import React from 'react';
import './App.css';
import AppTodo from './components/AppTodo';
function App() {
  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <AppTodo />
    </div>
  );
}

export default App;