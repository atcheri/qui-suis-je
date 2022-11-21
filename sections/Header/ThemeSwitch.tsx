import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeSwitch: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const isDarkMode = currentTheme === "dark";

  return isDarkMode ? (
    <HiOutlineSun
      className="w-10 h-10 text-yellow-200"
      role="button"
      onClick={() => setTheme("light")}
    />
  ) : (
    <HiOutlineMoon
      className="w-10 h-10 text-gray-600"
      role="button"
      onClick={() => setTheme("dark")}
    />
  );
};

export default ThemeSwitch;
