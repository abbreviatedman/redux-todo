import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos, todoAdded, todosDeleted, markAllTodosCompleted, completedTodosDeleted, todoDeleted, todoToggled, store } from "./store";
import { TodoItem } from "./TodoItem";



function App() {
  const dispatch = store.dispatch;

  function addTodo() {
    dispatch(todoAdded(inputValue));
    setInputValue("");
  }

  const todos = useSelector(selectTodos);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={() => dispatch(todosDeleted())}>DELETE ALL</button>
      <button onClick={() => dispatch(markAllTodosCompleted())}>
        Mark all complete
      </button>
      <button onClick={() => dispatch(completedTodosDeleted())}>
        delete all completed
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
