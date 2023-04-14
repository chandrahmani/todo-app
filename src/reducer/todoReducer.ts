
export const todoReducer = (state, action) => {
    switch (action.type) {
      case "TODO_ADD":
        return {
          todos: [...state.todos, action.payload]
        };
      case "TODO_DELETE":
        return {
          todos: state.todos.filter(
            (todo, indexTodo) => indexTodo !== action.payload
          )
        };
  
      case "UPDATE_TODO":
        const newTodos = [...state.todos];
        newTodos.splice(action.payload.id, 1, action.payload.todo);
        return {
          todos: newTodos
        };
      default:
        throw new Error();
    }
  };
  