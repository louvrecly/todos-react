import { Todo } from "../../constants/types";

export function setTodos(todos: Array<Todo>) {
  return {
    type: 'SET_TODOS' as 'SET_TODOS',
    todos
  };
}

export function updateTodo(updatedTodo: Todo) {
  return {
    type: 'UPDATE_TODO' as 'UPDATE_TODO',
    updatedTodo
  };
}

export function removeTodo(id: number) {
  return {
    type: 'REMOVE_TODO' as 'REMOVE_TODO',
    id
  };
}

type TodosActionCreators = typeof setTodos | typeof updateTodo | typeof removeTodo;

export type ITodosAction = ReturnType<TodosActionCreators>;
