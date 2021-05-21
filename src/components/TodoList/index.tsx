import React, { useState } from 'react';
import clsx from 'clsx';
import TodoItem from './TodoItem';
import { Todo } from '../../redux/todos/state';
import { DisplayType, displayTypes } from './constant';
import classes from './style.module.scss';

interface ITodoListProps {
  todos: Array<Todo>
}

const TodoList: React.FC<ITodoListProps> = (props: ITodoListProps) => {
  const [displayType, setDisplayType] = useState<DisplayType>('active');

  return (
    <div className={classes['todo-list']}>
      <ul className={classes.tiles}>
        {(Object.keys(displayTypes) as Array<DisplayType>)
          .map(key => (
            <li
              key={key}
              className={clsx([
                classes.tile,
                key === displayType && classes[key]
              ])}
              onClick={() => setDisplayType(key)}
            >{displayTypes[key].title}</li>
          ))
        }
      </ul>

      <ul className={classes['todos']}>
        {props.todos
          .filter(displayTypes[displayType].filter)
          .map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
