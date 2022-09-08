const initialState = [
  {
    id: 1,
    todo: "Recolectar diamantes",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Tomar awita rika",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo, // carga de la acción
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
