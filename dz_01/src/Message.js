// Урок 1. Знакомство с React и первые компоненты. Работа с JSX
// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание: Установить расширение React Devtools.

function Message({text}) {
  return (
    <div className="message">
      <h1>
      {text}
      </h1>
    </div>
  );
}

export default Message;