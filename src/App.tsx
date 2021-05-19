import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { fetchTodos } from './services/jsonPlaceholderApi';
import { Todo } from './constants/types';
import classes from './App.module.scss';

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
    <div className={classes.app}>
      <h1 className={classes.title}>User {userId}'s Todo List</h1>

      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
