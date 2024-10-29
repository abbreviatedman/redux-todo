import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo, preferences }) => {
  const listStyles = {
    listStyle: "none",
    padding: 0,
  };

  return (
    <ul style={listStyles}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          preferences={preferences}
        />
      ))}
    </ul>
  );
};

export default TodoList;
