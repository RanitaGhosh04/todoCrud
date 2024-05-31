import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const ToggleMode = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Switch to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ToggleMode;
