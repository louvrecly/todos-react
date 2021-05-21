import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { Todo } from '../../../constants/types';
import { removeTodo, updateTodo } from '../../../redux/todos/thunks';
import classes from './style.module.scss';

interface ITodoItemProps {
  todo: Todo
}

type FieldKeyType = 'completed' | 'title';
type TargetKeyType = 'checked' | 'value';

const TodoItem: React.FC<ITodoItemProps> = (props: ITodoItemProps) => {
  const dispatch = useDispatch();

  const eventTargetFieldGetter = {
    completed: 'checked',
    title: 'value'
  }

  const handleInput = (key: FieldKeyType): React.ChangeEventHandler<HTMLInputElement> => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTodo = {
      ...props.todo,
      [key]: e.target[eventTargetFieldGetter[key] as TargetKeyType]
    };
    dispatch(updateTodo(updatedTodo));
  };

  const handleOnClick = (id: number): React.MouseEventHandler<HTMLButtonElement> => () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className={clsx([
      classes['todo-item'],
      props.todo.completed && classes.completed
    ])}>
      <div className={classes.container}>
        <div className={classes.checker}>
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={props.todo.completed}
            onChange={handleInput('completed')}
          />
        </div>

        <input
          type="text"
          className={classes.title}
          value={props.todo.title}
          onChange={handleInput('title')}
        />

        <button className={classes.button} onClick={handleOnClick(props.todo.id as number)}>
          <span className={classes.icon}>×</span>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
