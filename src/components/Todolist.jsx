import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Link } from 'react-router-dom';

const Todolist = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleDelete = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/edit/${todo.id}`}>{todo.description}</Link>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Todo</Link>
    </div>
  );
};

export default Todolist;
