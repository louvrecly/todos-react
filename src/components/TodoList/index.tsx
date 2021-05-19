import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../constants/types';
import classes from './style.module.scss';

interface ITodoListProps {
  todos: Array<Todo>
}

const TodoList: React.FC<ITodoListProps> = (props: ITodoListProps) => {
  return (
    <ul className={classes['todo-list']}>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
