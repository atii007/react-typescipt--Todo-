import React from "react";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoList;
