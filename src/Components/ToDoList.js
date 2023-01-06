import ToDoShow from "./ToDoShow";

function ToDoList({ toDos, onDelete, onEdit }) {
  const renderedToDos = toDos.map((toDo) => {
    return (
      <ToDoShow toDo={toDo} key={toDo.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="todo-list">{renderedToDos}</div>;
}

export default ToDoList;
