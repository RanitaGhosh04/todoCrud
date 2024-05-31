import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './components/Todolist'
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import ToggleMode from './components/ToggleMode';
import { todoReducer } from './reducers/todoReducer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes/themes'

export const TodoContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [], theme: 'light' });

  return (
    <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
          <div className="App">
            <ToggleMode />
            <SearchBar />
            <Switch>
              <Route path="/add" component={TodoForm} />
              <Route path="/edit/:id" component={TodoForm} />
              <Route path="/" component={TodoList} />
            </Switch>
          </div>
        </Router>
      </TodoContext.Provider>
    </ThemeProvider>
  );
};

export default App;
