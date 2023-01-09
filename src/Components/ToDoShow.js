import { useState } from "react";
import ToDoEdit from "./ToDoEdit";
import useToDoContext from "../Hooks/use-todo-context";

function ToDoShow({ toDo }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteToDo } = useToDoContext();

  const onDeleteClick = (id) => {
    deleteToDo(toDo.id);
  };

  const onEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
  };

  let content = <h3>{toDo.title}</h3>;
  if (showEdit) content = <ToDoEdit toDo={toDo} onSubmit={handleSubmit} />;

  return (
    <div className="todo-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={onEditClick}>
          Delete
        </button>
        <button className="delete" onClick={onDeleteClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default ToDoShow;
