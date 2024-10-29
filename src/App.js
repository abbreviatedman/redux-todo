import React, { useState } from "react";
import Header from "./Header";
import TodoContainer from "./TodoContainer";
import Footer from "./Footer";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [preferences, setPreferences] = useState({ darkMode: false });

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: true }))
    );
  };

  const deleteAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const deleteAllTodos = () => {
    setTodos(() => []);
  };

  const toggleDarkMode = () => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      darkMode: !prevPreferences.darkMode,
    }));
  };

  const appStyles = {
    backgroundColor: preferences.darkMode ? "#121212" : "#fff",
    color: preferences.darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyles}>
      <Header toggleDarkMode={toggleDarkMode} preferences={preferences} />
      <TodoContainer
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        markAllComplete={markAllComplete}
        deleteAllCompleted={deleteAllCompleted}
        deleteAllTodos={deleteAllTodos}
        preferences={preferences}
      />
      <Footer todos={todos} preferences={preferences} />
    </div>
  );
};

export default App;
