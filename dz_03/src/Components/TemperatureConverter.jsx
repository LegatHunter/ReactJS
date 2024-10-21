// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function TemperatureConverter() {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  return (
    <div
      className="temperature-converter"
      style={{
        marginBottom: 20,
        display: "flex",
        maxWidth: 500,
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap",
      }}>
      <h1>Температурный конвертер</h1>
      <TextField
        id="celcius"
        label="Цельсии"
        variant="filled"
        value={celcius}
        onChange={(e) => {
          setCelcius(e.target.value);
          setFahrenheit((e.target.value * 9) / 5 + 32);
        }}
      />
      <Button variant="contained" size='large'>Зачем кнопка?</Button>
      <TextField
        id="fahrenheit"
        label="Фаренгейт"
        variant="filled"
        value={fahrenheit}
        onChange={(e) => {
          setFahrenheit(e.target.value);
          setCelcius((((e.target.value - 32) * 5) / 9).toFixed(2));
        }}
      />
    </div>
  );
}

export default TemperatureConverter;
