import { Dispatch } from "redux";
import { Todo } from "./state";
import { createTodoSuccess, failed, ITodosAction, loadTodosSuccess, removeTodoSuccess, updateTodoSuccess } from "./actions";
import { fetchTodos } from "../../services/jsonPlaceholderApi";
import checkSuccessfulStatus from "../../utils/checkSuccessfulStatus";
import createUuid from "../../utils/createUuid";

const limit = 10;

export function loadTodos(userId: number) {
  return async (dispatch: Dispatch<ITodosAction>) => {
    const { status, statusText, data } = await fetchTodos(userId);

    if (checkSuccessfulStatus(status)) dispatch(loadTodosSuccess((data as Array<Todo>).slice(0, limit)));
    else dispatch(failed('LOAD_TODOS_FAILED', statusText));
  };
}

export function createTodo(newTodo: Todo) {
  const id = createUuid();
  return (dispatch: Dispatch<ITodosAction>) => dispatch(createTodoSuccess({ ...newTodo, id }));
  /* Working code - commented out for performance concern since the Json Placeholder API are faked */
  // return async (dispatch: Dispatch<ITodosAction>) => {
  //   const { status, statusText, data } = await postTodo(newTodo);

  //   if (checkSuccessfulStatus(status)) dispatch(createTodoSuccess(data as Todo));
  //   else dispatch(failed('CREATE_TODO_FAILED', statusText));
  // };
}

export function updateTodo(updatedTodo: Todo) {
  return (dispatch: Dispatch<ITodosAction>) => dispatch(updateTodoSuccess(updatedTodo));
  /* Working code - commented out for performance concern since the Json Placeholder API are faked */
  // return async (dispatch: Dispatch<ITodosAction>) => {
  //   const { status, statusText, data } = await putTodo(updatedTodo);

  //   if (checkSuccessfulStatus(status)) dispatch(updateTodoSuccess(data as Todo));
  //   else dispatch(failed('UPDATE_TODO_FAILED', statusText));
  // };
}

export function removeTodo(id: number) {
  return (dispatch: Dispatch<ITodosAction>) => dispatch(removeTodoSuccess(id));
  /* Working code - commented out for performance concern since the Json Placeholder API are faked */
  // return async (dispatch: Dispatch<ITodosAction>) => {
  //   const { status, statusText } = await deleteTodo(id);

  //   if (checkSuccessfulStatus(status)) dispatch(removeTodoSuccess(id));
  //   else dispatch(failed('REMOVE_TODO_FAILED', statusText));
  // };
}
