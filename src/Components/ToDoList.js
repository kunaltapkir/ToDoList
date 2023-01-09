import ToDoShow from "./ToDoShow";
import useToDoContext from "../Hooks/use-todo-context";

function ToDoList() {
  const { toDos } = useToDoContext();

  const renderedToDos = toDos.map((toDo) => {
    return <ToDoShow toDo={toDo} key={toDo.id} />;
  });

  return <div className="todo-list">{renderedToDos}</div>;
}

export default ToDoList;
