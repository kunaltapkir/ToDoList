import { useState } from "react";
import ToDoEdit from "./ToDoEdit";

function ToDoShow({ toDo, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const onDeleteClick = (id) => {
    onDelete(toDo.id);
  };

  const onEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  let content = <h3>{toDo.title}</h3>;
  if (showEdit) content = <ToDoEdit toDo={toDo} onSubmit={handleSubmit} />;

  return (
    <div className="todo-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={onDeleteClick}>
          Delete
        </button>
        <button className="delete" onClick={onEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default ToDoShow;
