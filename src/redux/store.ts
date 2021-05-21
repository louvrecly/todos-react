import { combineReducers, Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ITodosState } from "./todos/state";
import { IStylesState } from './styles/state';
import { ITodosAction } from "./todos/actions";
import { IStylesAction } from './styles/actions';
import { todosReducer } from './todos/reducer';
import { stylesReducer } from './styles/reducer';

export interface IRootState {
  todos: ITodosState,
  styles: IStylesState
}

type IRootAction = ITodosAction | IStylesAction;

const rootReducer = combineReducers<IRootState, IRootAction>({
  todos: todosReducer as any,
  styles: stylesReducer as any
});

const store: Store<IRootState, IRootAction> = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;
