import { useState } from "react";
import useToDoContext from "../Hooks/use-todo-context";

function ToDoCreate({ onCreate }) {
  const [toDo, setToDo] = useState("");

  const { createToDo } = useToDoContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    createToDo(toDo);
    setToDo("");
  };

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  return (
    <div className="todo-create">
      <h3>Add a Task</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" value={toDo} onChange={onChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default ToDoCreate;
