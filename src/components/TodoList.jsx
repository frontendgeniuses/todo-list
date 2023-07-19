import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const TodoList = ({ todos, addTodo, deleteTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handeInputChanges = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };
  const handleDeleteTodo = (index) => {
    deleteTodo(index);
  };

  return (
    <div>
      <InputGroup className="mb-3  w-50 d-flex mx-auto">
        <FormControl
          placeholder="yapılacakları girin"
          value={todoText}
          onChange={handeInputChanges}
        />

        <Button className="input-group-text" onClick={handleAddTodo}>
          ADD
        </Button>
      </InputGroup>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
           <span>{todo}</span> 
            <Trash onClick={() => handleDeleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
