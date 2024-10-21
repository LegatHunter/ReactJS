// Создать React компонент TextDisplayForm, который позволяет пользователю ввести текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию кнопки.
// Создание поля ввода (TextField)
// Добавить TextField для ввода текста пользователем.
// Установить метку (label) поля ввода на "Введите текст".
// Сделать поле ввода на всю ширину (fullWidth).
// Разместить кнопку под полем ввода.
// Установить текст кнопки на "Отобразить текст".
// При нажатии на кнопку введенный текст должен отображаться под кнопкой.
// Отображение введенного текста
// Использовать состояние для хранения введенного и отображаемого текста.
// При нажатии на кнопку текст из поля ввода должен отображаться в стилизованной карточке (Card) под кнопкой.
// Стилизация отображаемого текста
// Для отображения текста использовать компонент Typography с вариантом h5.
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

function TextDisplayForm() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>TextDisplayForm</h1>
      <TextField id="textField" fullWidth label="Введите текст" variant="filled" style={{ marginBottom: 20 }}/>
      <Button variant="contained" onClick={()=> setText(document.querySelector('#textField').value)}>Отобразить текст</Button>
      <p>{text}</p>
    </div>
  );
}

export default TextDisplayForm;
