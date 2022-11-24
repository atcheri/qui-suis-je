import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { HiOutlineSun } from 'react-icons/hi2';
import { RiMoonFoggyLine } from 'react-icons/ri';

import { rotate1WithTransition } from '../../styles/tailwind.classes';

const ThemeSwitch: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const isDarkMode = currentTheme === 'dark';

  return isDarkMode ? (
    <HiOutlineSun
      className={`w-7 h-7 md:w-10 md:h-10 text-yellow-200 ${rotate1WithTransition}`}
      role="button"
      onClick={() => setTheme('light')}
    />
  ) : (
    <RiMoonFoggyLine
      className={`w-7 h-7 md:w-10 md:h-10 text-gray-600 ${rotate1WithTransition}`}
      role="button"
      onClick={() => setTheme('dark')}
    />
  );
};

export default ThemeSwitch;
