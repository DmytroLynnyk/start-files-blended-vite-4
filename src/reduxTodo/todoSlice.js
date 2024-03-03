import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  initialState: {
    items: [],
  },
  name: 'todoList',
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items = [...state.items, action.payload];
      },
      prepare: todo => {
        const id = nanoid();
        return { payload: { id, ...todo } };
      },
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
  selectors: {
    selectTodos: state => state.items,
  },
});

export const todoListReducer = todoSlice.reducer;
export const { selectTodos } = todoSlice.selectors;
