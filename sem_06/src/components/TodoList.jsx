import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../reducers/TodoListSlice";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const todos = useSelector((state) => state.todoList.array);
  const dispatch = useDispatch();
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <AddTodo todos={todos} />
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", gap: "20px" }}>
          <p>id: {todo.id}</p>
          <p>Text: {todo.text}</p>
          <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
        </div>
      ))}
    </section>
  );
}