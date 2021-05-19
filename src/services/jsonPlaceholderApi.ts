import axios from 'axios';

const jsonPlaceholderClient = axios.create({
  baseURL: process.env.REACT_APP_JSON_PLACEHOLDER_API
});

/* Todos endpoints */
export function fetchTodos(userId = 1) {
  return jsonPlaceholderClient.get('/todos', {
    params: { userId }
  });
}
