'use client';

import { useTheme } from 'next-themes';
import { MdOutlineWbSunny, MdOutlineNightlight } from 'react-icons/md';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button type='button' aria-label='Theme Toggle Button' onClick={handleClick}>
      {theme === 'light' ? <MdOutlineNightlight /> : <MdOutlineWbSunny />}
    </button>
  );
}
