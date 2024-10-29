import { useContext } from "react";
import { ThemeContext } from "../App";
import classes from "./Profile.module.css";

export default function Profile() {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={theme === "light" ? `${classes.light}` : `${classes.dark}`}>
      <h2>Profile</h2>
      <p>Ваша тема: {theme}</p>
    </section>
  );
}
