import { useState } from "react";

function InputText() {
  const [textInput, setTextInput] = useState("Вы ничего не ввели");
  if (textInput.length === 0) {
    setTextInput("Вы ничего не ввели");
  }
  return (
    <div className="task">
      <input type="text" onChange={(e) => setTextInput(e.target.value)} placeholder="Введи текст"/>
      <h4>{textInput}</h4>
    </div>
  );
}

export default InputText;