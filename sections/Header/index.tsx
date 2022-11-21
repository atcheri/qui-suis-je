import { FC } from "react";

import ThemeSwitch from "./ThemeSwitch";
import Logo from "../../components/Logo";

const Header: FC = () => {
  return (
    <header className="py-4 px-4 md:px-6 flex justify-between items-center h-15">
      <Logo />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
