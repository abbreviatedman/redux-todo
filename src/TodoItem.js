import { store, todoToggled } from "./store";
export function TodoItem(props) {
    const todo = props.todo;

    return (
        <li style={{textDecoration: todo.completed ? 'line-through' : ''}}>
            <span
                onClick={() => store.dispatch(todoToggled(todo.id))}
            >
                {todo.text}
            </span>
            <button
              onClick={() => store.dispatch({type: 'todoDeleted', payload: todo.id})}
            >
                X
            </button>
        </li>
    )
}