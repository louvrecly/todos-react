import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { History, createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { ITodosState } from "./todos/state";
import { IStylesState } from './styles/state';
import { ITodosAction } from "./todos/actions";
import { IStylesAction } from './styles/actions';
import { todosReducer } from './todos/reducer';
import { stylesReducer } from './styles/reducer';

export interface IRootState {
  router: RouterState,
  todos: ITodosState,
  styles: IStylesState
}

type IRootAction = ITodosAction | IStylesAction;

export const history = createBrowserHistory();

const rootReducer = (history: History) => combineReducers<IRootState>({
  router: connectRouter(history),
  todos: todosReducer,
  styles: stylesReducer
});

const store = createStore<IRootState, IRootAction, {}, {}>(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(thunk)
  )
);

export default store;
