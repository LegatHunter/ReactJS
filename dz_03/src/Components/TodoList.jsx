// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    const newTask = document.querySelector("#new-task").value;
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      document.querySelector("#new-task").value = "";
    }
  };
  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <TextField
        id="new-task"
        label="Новая задача"
        variant="standard"
        style={{ marginBottom: 20 }}
        fullWidth
      />
      <Button variant="contained" onClick={addTask} size="large">
        Добавить
      </Button>
      <List style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {tasks.map((task, index) => (
          <ListItem
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "space-between",
            }}
            key={index}>
            {task}
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => {
                setTasks(tasks.filter((e, i) => i !== index));
              }}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
