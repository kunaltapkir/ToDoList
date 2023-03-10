import { useState } from "react";
import useToDoContext from "../Hooks/use-todo-context";

function ToDoEdit({ toDo, onSubmit }) {
  const [title, setTitle] = useState(toDo.title);

  const { editToDo } = useToDoContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editToDo(toDo.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default ToDoEdit;
