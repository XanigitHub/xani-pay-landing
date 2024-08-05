import cardLogo from '../../assets/img/services/Vector.svg'
import skripkaLogo from '../../assets/img/services/Vector (1).svg'
import diogramLogo from '../../assets/img/services/Vector (2).svg'

const Services = () => {
    return (
        <div className='container mx-auto my-0'>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-background">
                <div className="mb-4 md:mb-0">
                    <div className="bg-accent text-[#FF6107] font-semibold px-3 py-1 rounded-md inline-block mb-2">services</div>
                    <h1 className="md:text-[44px] text-[26px] sm:text-[32px] font-bold text-foreground leading-[65px]">Exactly Everything You <br /> Need For Business</h1>
                </div>
                <div className="text-muted-foreground max-w-md">We understand how desperately you want to grow in <br /> the business world & our motto is to help you with <br /> practical ideas and plans.</div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="flex-1 bg-card p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-4 rounded-full">
                            <img undefinedhidden="true" alt="server-icon" src={cardLogo} />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Business Growing Support</h3>
                    <p className="text-muted-foreground mb-4">Get every necessary support to grow as business startup</p>
                    <a href="#" className="text-[#124F48] font-semibold hover:underline flex items-center">
                        Learn More <span className="ml-2">→</span>
                    </a>
                </div>

                <div className="flex-1 bg-card p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-4 px-6 rounded-full">
                            <img undefinedhidden="true" alt="paperclip-icon" src={skripkaLogo} />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Community Attachment</h3>
                    <p className="text-muted-foreground mb-6">A lifetime attachment with the community dreamer</p>
                    <a href="#" className="bg-[#FF823B] py-4 px-4 rounded-[31.5px] font-semibold text-white">
                        Learn More <span className="ml-2">→</span>
                    </a>
                </div>

                <div className="flex-1 bg-card p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="bg-red-100 p-4 rounded-full">
                            <img undefinedhidden="true" alt="chart-icon" src={diogramLogo} />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Exceptional Discovery Plans</h3>
                    <p className="text-muted-foreground mb-4">An exceptional plan can take you ahead millions of step which we discover</p>
                    <a href="#" className="text-[#124F48] font-semibold hover:underline flex items-center">
                        Learn More <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Services