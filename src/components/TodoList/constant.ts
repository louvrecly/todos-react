import { Todo } from "../../constants/types";

export type DisplayType = 'all' | 'active' | 'completed';

export const displayTypes = {
  all: {
    title: 'All',
    filter: () => true
  },
  active: {
    title: 'Active',
    filter: (todo: Todo) => !todo.completed
  },
  completed: {
    title: 'Completed',
    filter: (todo: Todo) => todo.completed
  }
}
