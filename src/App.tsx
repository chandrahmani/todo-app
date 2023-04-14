import { useReducer } from 'react'
import './App.css'
import Todo from './components/Todo';
import { TodoContext } from './context/context';
import { todoReducer } from './reducer/todoReducer';

const todoInitialState = {
  todos: []
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);

  const value = {
    todos: state.todos,


    addTodo: (payload:string) => {
      dispatch({ type: "TODO_ADD", payload: payload });
    },
    deleteTodo: (id:string) => {
      dispatch({ type: "TODO_DELETE", payload: id });
    },

    updateTodo: (id:string, todo:string) => {
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          id: id,
          todo: todo
        }
      });
    }
  };
    
  return (
    <div className="App">
     <TodoContext.Provider value={value}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}

export default App
