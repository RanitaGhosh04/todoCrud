export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_SEARCH_RESULTS':
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
