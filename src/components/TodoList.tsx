import { useRef, useState } from "react";
import './style.css'

type todoListPropsType = {
  todo: string,
  index:  number,
  deleteTodo: () => void,
  updateTodo: () => void,
}

const TodoList = ({ todo, index, deleteTodo, updateTodo }:todoListPropsType) =>{
  const [isOpen, setIsOpen] = useState(false);

  const todoRef = useRef<any>(null);

  const updateOpenForm = () => {
    setIsOpen(true);
  };


  const onColes = () => {
    setIsOpen(false);
    updateTodo(index, todoRef.current.value);
  };

  return (
    <>
      <div>
        <ul>
          <div className="list">
            {todo}
            {isOpen ? (
              <>
                <input
                  type="text"
                  placeholder="Update Text"
                  defaultValue={todo}
                  ref={todoRef}
                />
                <button type="submit" onClick={onColes}>
                  Submit
                </button>
              </>
            ) : (
              <>
                <button onClick={() => deleteTodo(index)}>X</button>
                <button onClick={updateOpenForm}>Update</button>
              </>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default TodoList;
