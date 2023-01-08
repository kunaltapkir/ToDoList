import { useEffect, useState } from "react";
import ToDoList from "./Components/ToDoList";
import ToDoCreate from "./Components/ToDoCreate";
import axios from "axios";

function App() {
  const [toDos, setToDos] = useState([]);

  const fetcTODos = async () => {
    const response = await axios.get("http://localhost:3001/toDos");
    setToDos(response.data);
  };

  useEffect(() => {
    fetcTODos();
  }, []);

  const createToDo = async (title) => {
    const response = await axios.post("http://localhost:3001/toDos", { title });
    const updatedList = [...toDos, response.data];
    setToDos(updatedList);
  };

  const deleteToDo = async (id) => {
    await axios.delete(`http://localhost:3001/toDos/${id}`);
    const updatedList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedList);
  };

  const editToDo = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/toDos/${id}`, {
      title,
    });
    const updatedList = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, ...response.data } : toDo
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
