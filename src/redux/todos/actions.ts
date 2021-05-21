import { Todo } from "./state";

export function loadTodosSuccess(todos: Array<Todo>) {
  return {
    type: 'LOAD_TODOS_SUCCESS' as 'LOAD_TODOS_SUCCESS',
    todos
  };
}

export function createTodoSuccess(newTodo: Todo) {
  return {
    type: 'CREATE_TODO_SUCCESS' as 'CREATE_TODO_SUCCESS',
    newTodo
  };
}

export function updateTodoSuccess(updatedTodo: Todo) {
  return {
    type: 'UPDATE_TODO_SUCCESS' as 'UPDATE_TODO_SUCCESS',
    updatedTodo
  };
}

export function removeTodoSuccess(id: number) {
  return {
    type: 'REMOVE_TODO_SUCCESS' as 'REMOVE_TODO_SUCCESS',
    id
  };
}

export function failed(type: FAILED, message: string) {
  return {
    type,
    message
  };
}

type FAILED = 'LOAD_TODOS_FAILED' | 'CREATE_TODO_FAILED' | 'UPDATE_TODO_FAILED' | 'REMOVE_TODO_FAILED';

type TodosActionCreators =
  | typeof loadTodosSuccess
  | typeof createTodoSuccess
  | typeof updateTodoSuccess
  | typeof removeTodoSuccess
  | typeof failed;


export type ITodosAction = ReturnType<TodosActionCreators>;
