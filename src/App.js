import React, { useState } from "react";

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
    </div>
  );
};

export default App;
