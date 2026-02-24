import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (!input) return;
    setTask((prevTask) => [...prevTask, input]);
    setInput("");
  }

  return (
    <>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {task.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
