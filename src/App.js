import React, { useState } from "react";

import List from "./components/List.js";
import Form from "./components/Form.js";

import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
      // console.log("Новый элемент списка: " + newItem.task);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const completeTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1 className="todo-counter">Список задач: {todos.length}</h1>
      </header>
      <Form addTask={addTask} />
      {todos.map((todo) => {
        return (
          <List
            todo={todo}
            key={todo.id}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
