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
      state.todos = [...newTodos];
      },
      updateTodo (state,action){
        if(action.payload!==state.todos)
        {
          state.todos=action.payload
        }
        console.log('updated');
      },
      editTodo (state,action) {
        console.log(action.payload);
        const newTodos = state.todos;
      const objIndex = newTodos.findIndex(
        (obj) => obj.id === action.payload.id
      );
      newTodos.splice(objIndex, 1);
      state.todos = [...newTodos,action.payload];
      }
    }
  });
  export const { addTodo, removeTodo,updateTodo,editTodo} = todoSlice.actions;
  export default todoSlice.reducer;