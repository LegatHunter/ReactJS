// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:

// const [comments, setComments] = useState([
// { id: 1, text: "Это первый комментарий" },
// { id: 2, text: "Это второй комментарий" },
// { id: 3, text: "Это третий комментарий" }
// ]);

import { useState } from "react";

export default function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  return (
    <div>
      <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.text}
          <button onClick={() => setComments(comments.filter((el) => el.id !== comment.id))}>X</button>
        </li>
      ))}
      </ul>
    </div>
  );
}