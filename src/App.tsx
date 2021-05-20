import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import { fetchTodos } from './services/jsonPlaceholderApi';
import { Todo } from './constants/types';
import { setTodos } from './redux/todos/actions';
import classes from './App.module.scss';
import { IRootState } from './redux/store';

const App: React.FC = () => {
  const [userId, setUserId] = useState<number>(1); // eslint-disable-line
  const todos = useSelector((state: IRootState) => state.todos.todos);
  const dispatch = useDispatch();

  async function initTodos(userId: number) {
    const { data } = await fetchTodos(userId);
    dispatch(setTodos(data as Array<Todo>));
  }

  useEffect(() => {
    initTodos(userId);
  }, [userId]); // eslint-disable-line

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>User {userId}'s Todo List</h1>

      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
