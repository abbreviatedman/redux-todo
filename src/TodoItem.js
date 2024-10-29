import { store, todoToggled, todoDeleted } from "./store";
export function TodoItem(props) {
  const { dispatch } = store;
  const todo = props.todo;

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      <span onClick={() => dispatch(todoToggled(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(todoDeleted(todo.id))}>X</button>
    </li>
  );
}
