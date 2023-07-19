import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  };

  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
