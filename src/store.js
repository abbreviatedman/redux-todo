import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0, text: 'Buy Groceries', completed: true},
    {id: 1, text: 'Walk the dog', completed: false},
    {id: 2, text: 'Go for a run', completed: false},
]



function getNextId(todos) {
    let maxId = -1;
    for (const todo of todos) {
        maxId = Math.max(maxId, todo.id);
    }

    return maxId + 1;
}

// reducer: takes the old state and the ticket (the action object)
// and gives you back a new state
// we aren't using this now that we're using Redux Toolkit's abstracted reducer!
export function todoReducer(state = initialState, action) {
    if (action.type === 'todoAdded') {
        const newTodo = {
            id: getNextId(state.todos),
            text: action.payload,
            completed: false,
        }

        return {
            todos: [
                ...state.todos,
                newTodo,
            ]
        }
    }

    if (action.type === 'todoToggled') {
        return {
            todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }

                return todo;
            })
        }
    }

    if (action.type === 'todosDeleted') {
        return {todos: []}
    }

    if (action.type === 'todoDeleted') {
        return {
            todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
    }

    if (action.type === 'completedTodosDeleted') {
        return {
            todos: state.todos.filter((todo) => !todo.completed)
        }
    }

    if (action.type === 'allTodosMarkedComplete') {
        return {
            todos: state.todos.map((todo) => ({...todo, completed: true}))
        }
    }

    return state;
}

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        todoAdded: function(todos, action) {
            todos.push({
                text: action.payload,
                id: getNextId(todos),
                completed: false,
            })
        },

        todoToggled: function(todos, action) {
            const todo = todos.find((todo) => todo.id === action.payload);
            todo.completed = !todo.completed;
        }
    }
})

export const selectTodos = (state) => state.todos

export const {todoAdded, todoToggled} = todosSlice.actions;
export const store = configureStore({reducer: {todos: todosSlice.reducer}, devTools: true});