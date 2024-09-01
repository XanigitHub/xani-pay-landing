//components/footer/footer.jsx
import { Footer } from "flowbite-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype } from "react-icons/fa";
import Logo from "../../assets/img/navbar/xani-logo.svg";
import "../../index.css";

const FooterP = () => {
  return (
    <div>
      <footer className="bg-yellow-100">
        {/* START FOOTER NAVIGATIONS */}
        <div className="max-w-7xl pb-8 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-left">
            <a href="#">
              <img src={Logo} alt="Website Logo" />
            </a>
          </div>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-orange-400">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-orange-400">
              Services
            </a>
            <a href="#" className="text-muted-foreground hover:text-orange-400">
              Contact
            </a>
          </nav>
          <div className="text-right mt-4 md:mt-0" id="contacts">
            <p className="text-muted-foreground">+998 1276 234</p>
            <p className="text-muted-foreground">82/93 Boeind Street. NY</p>
            <p className="text-muted-foreground">info@mail.com</p>
          </div>
        </div>
        {/* END FOOTER NAVIGATIONS */}
      </footer>

      {/* START FOOTER */}
      <div className="bg-yellow-300">
        <div className="container mx-auto my-0">
          <Footer container className="bg-yellow-300">
            <Footer.Copyright
              className="text-white"
              href="#"
              by="All Rights Reserved @xanipay"
              year={2024}
            />
            <Footer.LinkGroup className="mt-2 sm:mt-0">
              <Footer.Link href="#" className="text-2xl text-white">
                <FaXTwitter />
              </Footer.Link>
              <Footer.Link href="#" className="text-2xl text-white">
                <FaFacebook />
              </Footer.Link>
              <Footer.Link href="#" className="text-2xl text-white">
                <FaInstagram />
              </Footer.Link>
              <Footer.Link href="#" className="text-2xl text-white">
                <FaLinkedin />
              </Footer.Link>
              <Footer.Link href="#" className="text-2xl text-white">
                <FaSkype />
              </Footer.Link>
            </Footer.LinkGroup>
          </Footer>
        </div>
      </div>
      {/* END START FOOTER */}
    </div>
  );
};

export default FooterP;
