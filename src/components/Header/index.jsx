import Girl from '../../assets/img/header/pleased-satisfied-2-removebg 1.svg'

const Header = () => {
    return (
        // START HEADER
        <div className='container mt-11 mx-auto my-0 bg-[#E9FBF9] rounded-[30px]'>
            <div className="bg-muted p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2">

                    {/* site title */}
                    <div className="bg-[#fff] text-[#FF6107] px-3 py-1 rounded-[4px] inline-block tracking-wide mb-4">it works!</div>
                    <h1 className="md:text-[64px] text-4xl font-bold text-foreground md:leading-[60px] mb-4 lg:text-2xl1">Try Our Business Ideas to grow Rapidly</h1>
                    <p className="text-muted-foreground text-[18px] leading-8 mb-6">We understand how desperately you want to grow in <br /> the business world & our motto is to help you with <br /> practical ideas and plans.</p>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">

                        {/* START GET STARTED BTN */}
                        <button className="bg-primary text-white bg-[#FF823B] px-7 py-4 rounded-full">
                            Get Started
                        </button>
                        {/* END GET STARTED BTN */}

                        {/* START DEMO BTN */}
                        <button className="flex items-center space-x-2 text-secondary">
                            <div className="bg-white shadow-xl text-[#FF823B] p-2 rounded-full">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 17l6-5-6-5v10z" />
                                </svg>
                            </div>
                            <span className='text-[#FF823B] font-semibold tracking-wide'>DEMO VIDEO</span>
                        </button>
                        {/* END DEMO BTN */}

                    </div>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 relative">

                    {/* START HEADER GIRL IMG */}
                    <div className='bg-Circle h-max bg-no-repeat'>
                        <img src={Girl} alt="Smiling woman with ok gesture" className="mx-auto lg:mx-0 lg:ml-auto" />
                    </div>
                    {/* END HEADER GIRL IMG */}

                    {/* START BOTTOM OPOCITY CARD /SVG's in/ */}
                    <div className="absolute shadow-custom opacity-70 bottom-0 transform translate-x-1/4 translate-y-1/4">
                        <div className="grid grid-cols-2 gap-4 p-11 bg-white rounded-lg shadow-lg">
                            <div className="bg-yellow-500 p-4 rounded-lg">
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2984 5.32266H16.9984V3.11214C16.9984 1.89303 16.0117 0.901611 14.7984 0.901611H8.19838C6.98508 0.901611 5.99838 1.89303 5.99838 3.11214V5.32266H2.69838C1.48508 5.32266 0.498383 6.31408 0.498383 7.53319V10.849H22.4984V7.53319C22.4984 6.31408 21.5117 5.32266 20.2984 5.32266ZM8.19838 3.11214H14.7984V5.32266H8.19838V3.11214ZM13.6984 14.1648H9.29838V11.9542H0.498383V19.6911C0.498383 20.9102 1.48508 21.9016 2.69838 21.9016H20.2984C21.5117 21.9016 22.4984 20.9102 22.4984 19.6911V11.9542H13.6984V14.1648Z" fill="white" />
                                </svg>
                            </div>
                            <div className="bg-green-500 p-4 rounded-lg relative">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.2222 25C23.7542 25 25 23.7542 25 22.2222V2.77778C25 1.24583 23.7542 0 22.2222 0H2.77778C1.24583 0 0 1.24583 0 2.77778V22.2222C0 23.7542 1.24583 25 2.77778 25H22.2222ZM9.10139 9.24722L14.6569 12.025L16.8139 7.7125L19.2986 8.95555L15.9 15.7542L10.3444 12.9764L8.1875 17.2889L5.70278 16.0458L9.10139 9.24722Z" fill="white" />
                                </svg>
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">A</div>
                            </div>
                            <div className="bg-blue-500 p-4 rounded-lg">
                                <svg className='ml-1' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 4C16 1.832 12.337 0 8 0C3.663 0 0 1.832 0 4V6C0 8.168 3.663 10 8 10C12.337 10 16 8.168 16 6V4ZM8 17C3.663 17 0 15.168 0 13V16C0 18.168 3.663 20 8 20C12.337 20 16 18.168 16 16V13C16 15.168 12.337 17 8 17Z" fill="white" />
                                    <path d="M16 8C16 10.168 12.337 12 8 12C3.663 12 0 10.168 0 8V11C0 13.168 3.663 15 8 15C12.337 15 16 13.168 16 11V8Z" fill="white" />
                                </svg>
                            </div>
                            <div className="bg-orange-500 p-4 rounded-lg">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.08385 22.7238H1.61017C0.969849 22.7238 0.452271 22.205 0.452271 21.5659L0.452271 12.3027C0.452271 11.6635 0.969849 11.1448 1.61017 11.1448H5.08385C5.72416 11.1448 6.24174 11.6635 6.24174 12.3027V21.5659C6.24174 22.205 5.72416 22.7238 5.08385 22.7238ZM13.1891 22.7238H9.71543C9.07511 22.7238 8.55753 22.205 8.55753 21.5659L8.55753 1.88165C8.55753 1.24249 9.07511 0.723755 9.71543 0.723755L13.1891 0.723755C13.8294 0.723755 14.347 1.24249 14.347 1.88165L14.347 21.5659C14.347 22.205 13.8294 22.7238 13.1891 22.7238ZM21.2944 22.7238H17.8207C17.1804 22.7238 16.6628 22.205 16.6628 21.5659V8.82902C16.6628 8.18986 17.1804 7.67112 17.8207 7.67112H21.2944C21.9347 7.67112 22.4523 8.18986 22.4523 8.82902V21.5659C22.4523 22.205 21.9347 22.7238 21.2944 22.7238Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* END BOTTOM OPOCITY CARD /SVG's in/ */}

                </div>
            </div>
        </div>
        // END HEADER
    )
}

export default Header