import { Theme } from "./state";

export function setTheme(theme: Theme) {
  return {
    type: 'SET_THEME' as 'SET_THEME',
    theme
  };
}

type StylesActionCreators = typeof setTheme;

export type IStylesAction = ReturnType<StylesActionCreators>;
