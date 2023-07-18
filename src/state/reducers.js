export const mainReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== action.payload
            ? todo
            : { ...todo, completed: !todo.completed }
        ),
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
