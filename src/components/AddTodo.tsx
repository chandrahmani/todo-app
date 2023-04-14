import { FormEvent, useRef } from "react";

const AddTodos = ({ addTodo }:any) => {
  const todoInputRef = useRef<any>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(todoInputRef.current.value);
    todoInputRef.current.value = "";
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <input type="text" placeholder="Enter Your Name" ref={todoInputRef} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTodos;
