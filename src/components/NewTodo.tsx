import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
