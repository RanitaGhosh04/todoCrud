import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/Todolist';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import ToggleMode from './components/ToggleMode';
import { TodoProvider, TodoContext } from './contexts/TodoContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes/themes'

  const App = () => {
    return (
      <TodoProvider>
        <TodoContext.Consumer>
          {({ state }) => (
            <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
              <GlobalStyles />
              <Router>
                <div className="App">
                  <ToggleMode />
                  <SearchBar />
                  <Routes>
                    <Route path="/add" element={<TodoForm />} />
                    <Route path="/edit/:id" element={<TodoForm />} />
                    <Route path="/" element={<TodoList />} />
                  </Routes>
                </div>
              </Router>
            </ThemeProvider>
          )}
        </TodoContext.Consumer>
      </TodoProvider>
    );
  };
  
export default App;
