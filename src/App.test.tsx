import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { fetchTodos } from './services/jsonPlaceholderApi';

jest.mock('./services/jsonPlaceholderApi');

beforeEach(() => {
  (fetchTodos as jest.Mock).mockResolvedValue({ status: 200, statusText: 'OK', data: [] });
});

test('renders the todo list heading', async () => {
  render(<Provider store={store}><App /></Provider>);
  expect(await screen.findByText(/User 1's Todo List/i)).toBeInTheDocument();
});
