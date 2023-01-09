import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ToDoContext = createContext();

function Provider({ children }) {
  const [toDos, setToDos] = useState([]);

  const fetchToDos = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/toDos");
    setToDos(response.data);
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

  const properties = {
    toDos,
    createToDo,
    deleteToDo,
    editToDo,
    fetchToDos,
  };
  return (
    <ToDoContext.Provider value={properties}>{children}</ToDoContext.Provider>
  );
}

export { Provider };
export default ToDoContext;
