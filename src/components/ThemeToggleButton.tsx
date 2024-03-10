'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineWbSunny, MdOutlineNightlight } from 'react-icons/md';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type='button'
      aria-label='Theme Toggle Button'
      onClick={handleClick}
      className='h-10 w-10 rounded p-2 text-xl font-bold text-orange-500'
    >
      {mounted && (
        <>{theme === 'light' ? <MdOutlineNightlight /> : <MdOutlineWbSunny />}</>
      )}
    </button>
  );
}
