import React, { useContext } from "react";

import TodoList from "./TodoList";
import classes from "./Todo.module.css";
import { TodoContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
