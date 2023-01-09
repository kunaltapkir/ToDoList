import { useContext } from "react";
import ToDoContext from "../Context/todo";

function useToDoContext() {
  return useContext(ToDoContext);
}

export default useToDoContext;
