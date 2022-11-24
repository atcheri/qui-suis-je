import { FC } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import ThemeSwitch from './ThemeSwitch';
import Logo from '../../components/Logo';
import NavBar from './NavBar';

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <Slide
        className="py-4 px-4 md:px-6 flex justify-between items-center h-15 backdrop-blur-md"
        direction="down"
        triggerOnce={true}
      >
        <Fade triggerOnce={true}>
          <Logo />
          <ThemeSwitch />
        </Fade>
      </Slide>
      <NavBar />
    </header>
  );
};

export default Header;
