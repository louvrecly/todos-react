import React, { useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { loadTodos } from './redux/todos/thunks';
import { IRootState } from './redux/store';
import { userIds } from './constant';
import classes from './App.module.scss';

const App: React.FC = () => {
  const [userId, setUserId] = useState<number>(1); // eslint-disable-line
  const todos = useSelector((state: IRootState) => state.todos.todos);
  const dispatch = useDispatch();

  async function initTodos(userId: number) {
    dispatch(loadTodos(userId));
  }

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserId(parseInt(e.target.value));
  };

  useEffect(() => {
    initTodos(userId);
  }, [userId]); // eslint-disable-line

  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <h1 className={classes.title}>User {userId}'s Todo List</h1>

        <select className={classes.select} value={userId} onChange={handleSelect}>
          {userIds.map(id => (
            <option key={id} className={classes.option} value={id}>User {id}</option>
          ))}
        </select>
      </div>

      <NewTodo userId={userId} />

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
