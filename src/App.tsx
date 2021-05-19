import React, { useState, useEffect } from 'react';
import { fetchTodos } from './services/jsonPlaceholderApi';
import { Todo } from './constants/types';
import './App.css';

const App: React.FC = () => {
  const [userId, setUserId] = useState<number>(1); // eslint-disable-line
  const [todos, setTodos] = useState<Array<Todo>>([]);

  async function initTodos(userId: number) {
    const { data } = await fetchTodos(userId);
    setTodos(data as Array<Todo>);
  }

  useEffect(() => {
    initTodos(userId);
  }, [userId]);

  return (
    <div className="App">
      <h1>Todos</h1>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{JSON.stringify(todo)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
