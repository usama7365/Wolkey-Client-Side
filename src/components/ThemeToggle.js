import React from 'react';
import { useTheme } from 'next-themes';
import { BsSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
      }}
    >
      {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
    </button>
  );
}

export default ThemeToggle;
