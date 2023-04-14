import { useContext } from "react";
import { TodoContext } from "../context/context";
import AddTodos from "./AddTodo";
import TodoList from "./TodoList";

type todoPropsType = {
  todos: [],
  deleteTodo: () => void,
  addTodo: () => void,
  updateTodo: () => void,
}

const Todo = () => {
  const {
    todos,
    deleteTodo,
    addTodo,
    updateTodo,
  } = useContext<todoPropsType>(TodoContext);

  return (
    <>
      <AddTodos addTodo={addTodo} />

      {todos.map((todo:string, index:number) => (
        <TodoList
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          index={index}
          updateTodo={updateTodo}
        />
      ))}
    </>
  );
};

export default Todo;
