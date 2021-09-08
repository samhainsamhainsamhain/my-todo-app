import React, { useState } from "react";

import "./Form.scss";

const Form = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const changeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      submitHandler(event);
    }
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <input
        className="todo-form__input"
        placeholder="Введите задачу..."
        type="text"
        id="input"
        value={userInput}
        onChange={changeHandler}
        onKeyDown={keyPressHandler}
      />
      <button htmlFor="input" type="submit" className="todo-form__btn">
        Сохранить
      </button>
    </form>
  );
};

export default Form;
