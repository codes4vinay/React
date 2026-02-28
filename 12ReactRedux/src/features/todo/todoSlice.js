import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// In Redux, State is the "what" and Actions are the "why." They work together to make your application's data predictable. 

//     1. State: The "Source of Truth"
// State is a plain JavaScript object that represents the current condition of your entire application at a specific point in time.
//     Redux
// Centralized: Instead of data being scattered across many components, it lives in one place called the Store.
//     Read - Only: You cannot change the state directly(e.g., state.value = 5 is not allowed).To change it, you must describe your intent through an action.
 

//     2. Actions: The "Events"
// An action is a plain JavaScript object that describes something that happened in your app.It is the only way to get data into the Redux store.
//     Redux
// Type(Required): Every action must have a type property (usually a string) that gives the action a descriptive name.
//     Payload(Optional): This is any additional data needed to update the state.
