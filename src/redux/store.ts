import { combineReducers, Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ITodosState } from "./todos/state";
import { ITodosAction } from "./todos/actions";
import { todosReducer } from './todos/reducer';

export interface IRootState {
  todos: ITodosState
}

type IRootAction = ITodosAction;

const rootReducer = combineReducers<IRootState, IRootAction>({ todos: todosReducer });

const store: Store<IRootState, IRootAction> = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;
