// redux/features/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  fetchTodo: {},
  taskStatus: [
    { id: 1, status: "Completed" },
    { id: 2, status: "In Progress" },
    { id: 3, status: "Not Started" },
  ],
  taskCategories: [
    {
      id: 1,
      category: "Low",
    },
    {
      id: 2,
      category: "Moderate",
    },
    {
      id: 3,
      category: "High",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    putTodo: (state, action) => {
      state.fetchTodo = action.payload;
    },
    editTodo: (state, action) => {
      const { id, title, date, priority, description, status } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);

      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.date = date;
        existingTodo.priority = priority;
        existingTodo.description = description;
        existingTodo.status = status;
      }
    },
    addStatus: () => {},
    addCategory: (state, action) => {
      state.taskCategories.push(action.payload);
    },
    deleteCategory:(state,action)=>{
      console.log(action.payload)
          //  state.taskCategories=state.taskCategories.filter((id)=>action.payload.id !==item.id) 
    },
    loadStatus: () => {},
    loadCategories: (state,action) => {
      
      state.taskCategories=action.payload
    },
    loadTodos: (state, action) => {
     
      state.todos = action.payload;
    },
    getSingleTodo: (state, action) => {
      state.fetchTodo = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  putTodo,
  loadTodos,
  getSingleTodo,
  editTodo,
  loadCategories,
  loadStatus,
  addCategory,
  addStatus,
  deleteCategory
} = todoSlice.actions;

export default todoSlice.reducer;
