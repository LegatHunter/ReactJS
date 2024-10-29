// Создайте контексты UserContext и ThemeContext с начальными значениями (например, имя пользователя: "Гость", тема: "светлая").
// Реализуйте компонент App:
// Оберните дочерние компоненты в UserContext.Provider и ThemeContext.Provider.
// Добавьте возможность изменения имени пользователя и темы через интерфейс пользователя.
// Создайте компоненты, использующие эти контексты:
// Header должен отображать приветствие с именем пользователя.
// Profile может показывать более детальную информацию о пользователе или просто использовать тему для стилизации.
// Footer должен использовать тему для стилизации и, возможно, отображать копирайт с текущим годом.
// Добавьте возможность изменения темы и имени пользователя в интерфейсе, используя состояние в компоненте App и передавая функции для изменения через контекст.

// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого компонента должен отображаться загрузочный индикатор.

// Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый компонент, который показывает либо индикатор загрузки, либо содержимое оригинального компонента в зависимости от пропса isLoading.
// Можно использовать простой текстовый индикатор или любой спиннер из доступных библиотек.

import "./App.css";
import { createContext, useState } from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading.jsx";

export const UserContext = createContext("Guest");
export const ThemeContext = createContext("light");

const withLoadingIndicator = (Component, isLoading) => {
  return (props) => {
    const newProps = {
      ...props,
      isLoading,
    };
    return <Component {...newProps} />;
  };
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const NewLoading = withLoadingIndicator(Loading, isLoading);

  setTimeout(() => {
    setIsLoading((prev) => !prev);
  }, 3000);
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("Guest");

  function changeUserName(e) {
    let newUserName = e.target.closest("div").querySelector("input").value;
    setUserName(newUserName);
    newUserName = "";
  }

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={userName}>
          <Header />
          <div>
            <input />
            <button onClick={changeUserName}>Edit user name</button>
          </div>
          <Profile />
          <Footer />
          <div>
            <button onClick={toggleTheme}>Change theme</button>
          </div>
          <NewLoading />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
