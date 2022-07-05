import React, { useState } from "react";

export const TodoList = (props) => {
  const handleRemoveTask = (index) => {
    const newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };

  const handleUpdateTask = (index) => {
    let newTodos = props.todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    props.setTodos(newTodos);
  };
  
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li
          key={index}
          style={
            todo.isCompleted === true
              ? { textDecorationLine: "line-through" }
              : {}
          }
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(index)}
          />
          {todo.task}
          <span
            onClick={() => {
              handleRemoveTask(index);
            }}
            style={{ cursor: "pointer" }}
          >
            ❌
          </span>
        </li>
      ))}
    </ul>
  );
};
