import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brands from './components/Brands';
import Header from './components/Header';
import Nav from './components/Navbar';
import Services from './components/Services';
import WithLoading from './components/Loading/WithLoading';
import Blog from './components/Blog';
import FooterP from './components/Footer/Footer';
import Service from './components/Services/Service';

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <WithLoading>
      <div>
        {/* START NAVBAR */}
        <Nav />
        {/* END NAVBAR */}
        {/* START HEADER */}
        <div data-aos="fade-up" data-aos-duration="4000">
          <Header />
        </div>
        {/* END HEADER */}
        {/* START BRANDS 
        <div data-aos="fade-down-left" data-aos-duration="4000">
          <Brands />
        </div>
         END BRANDS */}
        {/* START SERVICES */}
        <div data-aos="fade-left" data-aos-duration="4000">
          <Services />
        </div>
        {/* END SERVICES */}
        <div data-aos="fade-down-right" data-aos-duration="4000">
          <Service />
        </div>

        {/* START BLOG
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="4000"
        >
          <Blog />
        </div>
        END BLOG */}
        {/* START FOOTER */}
        <div data-aos="fade-up" data-aos-duration="3000">
          <FooterP />
        </div>
        {/* END FOOTER */}
      </div>
    </WithLoading>
  );
}

export default App;
