import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const SearchBar = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    const filteredTodos = state.todos.filter(todo =>
      todo.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch({ type: 'SET_SEARCH_RESULTS', payload: filteredTodos });
  };

  return (
    <input
      type="text"
      placeholder="Search todos..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
