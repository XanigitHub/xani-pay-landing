import OnlineBank from "../../assets/img/header/online-bank.png";

const Header = () => {
  return (
    // START HEADER

    <div
      className="bg-muted p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between bg-yellow-300"
      id="home"
    >
      <div className="lg:w-1/2">
        {/* site title */}
        <h1 className="md:text-[64px] text-4xl font-bold text-foreground md:leading-[60px] mb-4 lg:text-2xl1 py-5 my-10">
          Effortless Banking, All-in-One
        </h1>
        <h3 className="text-foreground text-3xl text-gray-700 font-bold leading-8 mb-6">
          Tired of juggling bank accounts and managing your finances? xanipay
          connects all your banks for seamless transactions so you can spend
          with ease.
        </h3>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* START GET STARTED BTN */}
          <button className="bg-primary text-white bg-[#FF823B] px-7 py-4 rounded-full">
            Get Started
          </button>
          {/* END GET STARTED BTN */}
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
        {/* START HEADER GIRL IMG */}
        <div className="bg-Circle h-max bg-no-repeat">
          <img
            src={OnlineBank}
            alt="Smiling woman with ok gesture"
            className="mx-auto lg:mx-0 lg:ml-auto"
          />
        </div>
        {/* END HEADER GIRL IMG */}
      </div>
    </div>

    // END HEADER
  );
};

export default Header;
