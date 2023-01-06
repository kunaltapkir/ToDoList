import { useState } from "react";
import ToDoList from "./Components/ToDoList";
import ToDoCreate from "./Components/ToDoCreate";

function App() {
  const [toDos, setToDos] = useState([]);

  const createToDo = (title) => {
    const updatedList = [
      ...toDos,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setToDos(updatedList);
  };

  const deleteToDo = (id) => {
    const updatedList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedList);
  };

  const editToDo = (id, title) => {
    const updatedList = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, title } : toDo
    );
    setToDos(updatedList);
  };

  return (
    <div className="app">
      <ToDoList toDos={toDos} onDelete={deleteToDo} onEdit={editToDo} />
      <ToDoCreate onCreate={createToDo} />
    </div>
  );
}

export default App;
