import { ITodosState } from "./state";
import { ITodosAction } from "./actions";

const initialState: ITodosState = {
  todos: []
};

export function todosReducer(state: ITodosState = initialState, action: ITodosAction): ITodosState {
  switch (action.type) {
    case 'LOAD_TODOS_SUCCESS':
      {
        const { todos } = action;
        return {
          ...state,
          todos
        };
      }
    case 'CREATE_TODO_SUCCESS':
      {
        const { newTodo } = action;
        const todos = [newTodo, ...state.todos.slice()];
        return {
          ...state,
          todos
        };
      }
    case 'UPDATE_TODO_SUCCESS':
      {
        const { updatedTodo } = action;
        const todos = state.todos.slice();
        const index = todos.findIndex(todo => todo.id === updatedTodo.id);
        todos.splice(index, 1, updatedTodo);
        return {
          ...state,
          todos
        };
      }
    case 'REMOVE_TODO_SUCCESS':
      {
        const { id } = action;
        const todos = state.todos.slice();
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        return {
          ...state,
          todos
        };
      }
    default:
      return state;
  }
}
