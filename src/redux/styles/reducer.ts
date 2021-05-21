import { IStylesState } from "./state";
import { IStylesAction } from "./actions";

export const defaultTheme = 'light';

const initialState: IStylesState = {
  theme: defaultTheme
};

export function stylesReducer(state: IStylesState = initialState, action: IStylesAction): IStylesState {
  switch (action.type) {
    case 'SET_THEME':
      const { theme } = action;
      return {
        ...state,
        theme
      };
    default:
      return state;
  }
}
