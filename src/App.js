import { useEffect } from "react";
import ToDoList from "./Components/ToDoList";
import ToDoCreate from "./Components/ToDoCreate";
import useToDoContext from "./Hooks/use-todo-context";

function App() {
  const { fetchToDos } = useToDoContext();

  useEffect(() => {
    fetchToDos();
  }, [fetchToDos]);

  return (
    <div className="app">
      <ToDoList />
      <ToDoCreate />
    </div>
  );
}

export default App;
