import { useState } from "react";
function ToDo() {
  const [el, setEl] = useState(['Задача 1', 'Задача 2', 'Задача 3']);
  return (
    <div className="to-do task">
      <div className="to-do__el">
        <h3>Список задач</h3>
        <ul>
          {el.map((el, index) => (
            <li key={index}>{el} <button className="to-do__btn" onClick={() => setEl(el.filter((item, i) => i !== index))}>X</button></li>
          ))}
        </ul>
      </div>
      <div className="to-do__control">
        <input type="text" />
        <button type="button" onClick={() => {
          const input = document.querySelector('.to-do__control input');
          setEl([...el, input.value]);
          input.value = '';
        }}>
        Добавить</button>
      </div>
    </div>
  );
}

export default ToDo;
