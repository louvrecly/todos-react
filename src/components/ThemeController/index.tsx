import React from 'react'
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { setTheme } from '../../redux/styles/actions';
import { defaultTheme } from '../../redux/styles/reducer';
import { Theme } from '../../redux/styles/state';
import classes from './style.module.scss';

interface IThemeControllerProps {
  theme: Theme
}

const ThemeController: React.FC<IThemeControllerProps> = (props: IThemeControllerProps) => {
  const dispatch = useDispatch();

  const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = () => {
    let newTheme: Theme;
    switch (props.theme) {
      case 'light':
        newTheme = 'dark';
        break;
      case 'dark':
        newTheme = 'light';
        break;
      default:
        newTheme = defaultTheme;
    }
    dispatch(setTheme(newTheme));
  };

  return (
    <div className={classes['theme-controller']}>
      <button className={classes.button} onClick={toggleTheme}>
        <span className={clsx([
          classes.icon,
          props.theme === 'light' && classes.active
        ])}>🌞</span>

        <span className={clsx([
          classes.icon,
          props.theme === 'dark' && classes.active
        ])}>🌙</span>
      </button>
    </div>
  );
};

export default ThemeController;
