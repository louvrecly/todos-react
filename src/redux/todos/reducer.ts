import { ITodosState } from "./state";
import { ITodosAction } from "./actions";

const initialState: ITodosState = {
  todos: []
};

export function todosReducer(state: ITodosState = initialState, action: ITodosAction): ITodosState {
  switch (action.type) {
    case 'SET_TODOS':
      {
        const { todos } = action;
        return {
          ...state,
          todos
        };
      }
    case 'UPDATE_TODO':
      {
        const { updatedTodo } = action;
        const todos = state.todos.slice();
        const index = todos.findIndex(todo => todo.id === updatedTodo.id);
        todos.splice(index, 1, updatedTodo);
        return {
          ...state,
          todos
        }
      }
    case 'REMOVE_TODO':
      {
        const { id } = action;
        const todos = state.todos.slice();
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        return {
          ...state,
          todos
        }
      }
    default:
      return state;
  }
}
