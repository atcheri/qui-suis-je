import { FC } from "react";

import ThemeSwitch from "./ThemeSwitch";
import Logo from "../../components/Logo";

const Header: FC = () => {
  return (
    <header className="h-15 shadow-sm dark:border-gray-700">
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
        <Logo />
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
