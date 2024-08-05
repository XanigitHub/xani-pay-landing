import React, { useState, useEffect } from 'react';
import { Navbar, Button } from 'flowbite-react';
import Logo from '../../assets/img/navbar/xani-logo.svg';
import './styles.css';

const Nav = () => {
  // START DARK MODE
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  // END DARK MODE

  return (
    // START NAVBAR
    <div className="container mx-auto my-0 fixed top-0 left-0 right-0 z-50 bg-white">
      <Navbar fluid>
        {/* START WEBSITE LOGO */}
        <Navbar.Brand href="#">
          <img src={Logo} className="mr-3 h-16 sm:h-17" alt="Website Logo" />
        </Navbar.Brand>
        {/* END WEBSITE LOGO */}

        {/* START LOGIN BTN */}
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        {/* END LOGIN BTN */}

        {/* nav list */}
        {/* <ul> */}
        <Navbar.Collapse>
          <div className="md:flex gap-12">
            <Navbar.Link className="text-[#0B041B] text-lg" href="#" active>
              About{' '}
              <span className="border-b-2 border-[#FF7715] hover:border-none duration-75 hover:duration-75">
                xani pay
              </span>
            </Navbar.Link>
            <Navbar.Link href="#" className="hover-a text-lg">
              Features
            </Navbar.Link>
            <Navbar.Link href="#" className="hover-a text-lg">
              Portfolio
            </Navbar.Link>
            <Navbar.Link href="#" className="hover-a text-lg">
              Reviews
            </Navbar.Link>

            {/* START DARK MODE BTN 
            <Navbar.Link href="#" className="hover-a text-lg">
              <button id="dark-mode-btn" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </Navbar.Link>
            END DARK MODE BTN */}
          </div>
        </Navbar.Collapse>
        {/* </ul> */}
      </Navbar>
    </div>
    // END NAVBAR
  );
};

export default Nav;
