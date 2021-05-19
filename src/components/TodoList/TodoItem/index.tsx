import React from 'react';
import clsx from 'clsx';
import { Todo } from '../../../constants/types';
import classes from './style.module.scss';

interface ITodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<ITodoItemProps> = (props: ITodoItemProps) => {
  return (
    <li className={classes['todo-item']}>
      <div className={classes.container}>
        <div className={clsx([
          classes.checker,
          props.todo.completed && classes.checked
        ])}>
          <input type="checkbox" className={classes.checkbox} checked={props.todo.completed} />
        </div>

        <input type="text" className={classes.title} value={props.todo.title} />

        <button className={classes.button}>
          <span className={classes.icon}>×</span>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
