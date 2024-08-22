import { Navbar } from 'flowbite-react';
import Logo from '../../assets/img/navbar/xani-logo.svg';
import './styles.css';

const Nav = () => {
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
            <Navbar.Link className="text-lg" href="#">
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className="hover-a text-lg">
              Serviecs
            </Navbar.Link>
            <Navbar.Link href="#" className="hover-a text-lg">
              Contact
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
