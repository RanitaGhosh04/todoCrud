import React, { useContext } from 'react';
import { TodoContext } from '../App';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <div>
      {state.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
