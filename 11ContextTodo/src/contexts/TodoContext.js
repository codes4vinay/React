import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Learn React",
        completed: false
    }],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleComplete: (id) => { }
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);