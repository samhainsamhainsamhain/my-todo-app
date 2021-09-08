import React from "react";
import "./List.scss";

const List = ({ todo, removeTask, completeTask }) => {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => completeTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        Х
      </div>
    </div>
  );
};

export default List;
