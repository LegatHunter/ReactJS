import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "./tasksSlice";

function App() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.items);

  const taskStatus = useSelector((state) => state.tasks.status);

  useEffect(() => {
    if (taskStatus === "start") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  return (
    <div className="App">
      <h1>Задачи</h1>

      {taskStatus === "loading" && <p>Загрузка...</p>}

      {taskStatus === "succeeded" && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}: {task.completed ? "Готово" : "Не готово"}
            </li>
          ))}
        </ul>
      )}

      {taskStatus === "failed" && <p>Ошибка загрузки</p>}
    </div>
  );
}

export default App;
