import { combineReducers, Store, createStore } from 'redux';
import { ITodosState } from "./todos/state";
import { ITodosAction } from "./todos/actions";
import { todosReducer } from './todos/reducer';

export interface IRootState {
  todos: ITodosState
}

type IRootAction = ITodosAction;

const rootReducer = combineReducers<IRootState, IRootAction>({ todos: todosReducer });

const store: Store<IRootState, IRootAction> = createStore(rootReducer);

export default store;
