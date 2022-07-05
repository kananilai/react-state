import React, { useState } from "react";

export const AddTodo = (props) => {
  //入力した情報を保持するため
  const [task, setTask] = useState("");

  const handleNewTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    props.setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      AddTask:
      <input
        type="text"
        value={task}
        placeholder="Add New Task"
        onChange={handleNewTask}
      />
      <button type="submit">Add</button>
    </form>
  );
};
