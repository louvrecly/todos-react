import React, { ChangeEvent, useState } from 'react'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { createTodo } from '../../redux/todos/thunks';
import classes from './style.module.scss';

interface INewTodoProps {
  userId: number
}

const NewTodo: React.FC<INewTodoProps> = (props: INewTodoProps) => {
  const [title, setTitle] = useState<string>('');
  const [busy, setBusy] = useState<boolean>(false);

  const theme = useSelector((state: IRootState) => state.styles.theme)

  const dispatch = useDispatch();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!title) return;

    setBusy(true);

    const newTodo = {
      userId: props.userId,
      completed: false,
      title
    };

    dispatch(createTodo(newTodo));

    setTitle('');
    setBusy(false);
  };

  return (
    <div className={clsx([
      classes['new-todo'],
      classes[theme]
    ])}>
      <input type="text" className={classes.input} value={title} onChange={handleInput} />

      <button className={classes.button} onClick={handleSubmit} disabled={busy}>
        <span className={classes.icon}>+</span>
      </button>
    </div>
  );
};

export default NewTodo;
