import React, { useContext, useState } from 'react';
import { TodoContext } from '../App';
import { useHistory, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { id } = useParams();
  const history = useHistory();
  const todoToEdit = state.todos.find(todo => todo.id === id);
  const [form, setForm] = useState(todoToEdit || { description: '', dueDate: '', priority: '', notes: '', email: '', reminder: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      dispatch({ type: 'UPDATE_TODO', payload: form });
    } else {
      dispatch({ type: 'ADD_TODO', payload: { ...form, id: Date.now().toString() } });
    }
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
      <input type="date" value={dayjs(form.dueDate).format('YYYY-MM-DD')} onChange={e => setForm({ ...form, dueDate: e.target.value })} required />
      <select value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })} required>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <textarea placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}></textarea>
      <input type="email" placeholder="Email for reminder" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="datetime-local" value={form.reminder} onChange={e => setForm({ ...form, reminder: e.target.value })} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoForm;
