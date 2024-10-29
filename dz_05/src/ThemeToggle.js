import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions.js';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      flexDirection: 'column',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>Приложение смены темы</h1>
      <button onClick={handleToggle}>
        Поменять на {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <p>Текущая тема: {theme}</p>
    </div>
  );
};

export default ThemeToggle;