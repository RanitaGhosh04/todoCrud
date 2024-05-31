import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [notes, setNotes] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const todo = state.todos.find(todo => todo.id === parseInt(id));
      if (todo) {
        setDescription(todo.description);
        setDueDate(todo.dueDate);
        setPriority(todo.priority);
        setNotes(todo.notes);
      }
    }
  }, [id, state.todos]);

  const handleSubmit = e => {
    e.preventDefault();
    const todo = { id: id ? parseInt(id) : Date.now(), description, dueDate, priority, notes };
    dispatch({ type: id ? 'UPDATE_TODO' : 'ADD_TODO', payload: todo });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </div>
      <div>
        <label>Priority:</label>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Notes:</label>
        <textarea value={notes} onChange={e => setNotes(e.target.value)} />
      </div>
      <button type="submit">{id ? 'Update' : 'Add'} Todo</button>
    </form>
  );
};

export default TodoForm;
