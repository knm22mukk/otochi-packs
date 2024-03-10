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
      className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-xl text-orange-500 hover:bg-orange-100 hover:text-orange-600'
    >
      {mounted && (
        <>{theme === 'light' ? <MdOutlineNightlight /> : <MdOutlineWbSunny />}</>
      )}
    </button>
  );
}
