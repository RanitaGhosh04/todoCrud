import React, { createContext, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [], theme: 'light' });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
