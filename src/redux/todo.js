import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos:[
          
        ]
    },
    reducers: {
      addTodo(state, action) {
        state.todos=[...state.todos,action.payload];
      },
      removeTodo(state, action) {
       const newTodos = state.todos;
      const objIndex = newTodos.findIndex(
        (obj) => obj === action.payload
      );
      newTodos.splice(objIndex, 1);
      state.products = [...newTodos];
      },
      updateTodo (state,action){
        if(action.payload!==state.todos)
        {
          state.todos=action.payload
        }
        console.log('updated');
      }
    }
  });
  export const { addTodo, removeTodo,updateTodo} = todoSlice.actions;
  export default todoSlice.reducer;