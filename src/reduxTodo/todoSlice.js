import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  initialState: {
    items: [],
    currentTodo: null,
  },
  name: 'todoList',
  reducers: create => ({
    addTodo: create.preparedReducer(
      todo => {
        const id = nanoid();
        return { payload: { id, ...todo } };
      },
      (state, action) => {
        state.items = [...state.items, action.payload];
      },
    ),
    deleteTodo: create.reducer((state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }),
    toggleForm: create.reducer((state, { payload }) => {
      state.currentTodo = state.items.find(({ id }) => id === payload) ?? null;
    }),
    editTodo: create.reducer((state, { payload }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(index, 1, payload);
      state.currentTodo = null;
    }),
  }),
  // selectors: {
  //   selectTodos: state => state.items,
  // },
});

export const {
  // selectors: { selectTodos },
  actions: { addTodo, deleteTodo, toggleForm, editTodo },
  reducer: todoListReducer,
} = todoSlice;

export const selectTodos = state => {
  return state.todos.items;
};
export const selectCurrentTodo = state => {
  return state.todos.currentTodo;
};
