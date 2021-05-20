import axios from 'axios';
import { Todo } from '../constants/types';

const jsonPlaceholderClient = axios.create({
  baseURL: process.env.REACT_APP_JSON_PLACEHOLDER_API
});

/* Todos endpoints */
export function fetchTodos(userId: number = 1) {
  return jsonPlaceholderClient.get('/todos', {
    params: { userId }
  });
}

export function postTodo(newTodo: Todo) {
  return jsonPlaceholderClient.post('/todos', newTodo);
}

export function putTodo(updatedTodo: Todo) {
  return jsonPlaceholderClient.put(`/todos/${updatedTodo.id as number}`, updatedTodo);
}

export function deleteTodo(id: number) {
  return jsonPlaceholderClient.delete(`/todos/${id}`);
}
