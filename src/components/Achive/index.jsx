import profIMG from '../../assets/img/achive/Group 203.png'
import profIMG2 from '../../assets/img/achive/Group 204.png'

const Profile = () => {
    return (
        <div className='container mx-auto my-0'>
            <div className="bg-background p-8">
                <div className="mb-4">
                    <span className="text-rootOrange font-semibold text-accent-foreground px-2 py-1 rounded-md">achievements</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4 leading-[50px]">
                    We Worked With <span className="text-rootOrange">100+</span> <br /> Company Over <span className="text-rootOrange">10 </span> Years
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img className="rounded-md w-80" src={profIMG} alt="achievement-image" />
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-4xl font-bold text-[#124F485E]">9k+</span>
                            <div>
                                <p className="text-lg font-semibold text-[#124F48]">Completed Full <br /> Projects</p>
                            </div>
                            <p className='text-rootOrange font-semibold'>From 789+ Companies</p>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-4xl font-bold text-[#124F485E]">924+</span>
                            <div>
                                <p className="text-lg font-semibold text-[#124F48]">Satisfyingly Happy <br /> Clients</p>
                            </div>
                            <p className='text-rootOrange font-semibold'>From 100+ Countries</p>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-4xl font-bold text-[#124F485E]">416</span>
                            <div>
                                <p className="text-lg font-semibold text-[#124F48]">Expertised Unit <br /> Employees</p>
                            </div>
                            <p className='text-rootOrange font-semibold'>From 20+ Countries</p>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-4xl font-bold text-[#124F485E]">3024</span>
                            <div>
                                <p className="text-lg font-semibold text-[#124F48]">Startups Case <br /> Studies</p>
                            </div>
                            <p className='text-rootOrange font-semibold'>From 100+ Countries</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 bg-background text-foreground">
                <div className="flex-1">
                    <h2 className="text-xl font-bold">JobHub Job Finding Website</h2>
                    <p className="mt-2 text-muted-foreground">This website has become one of the best ux interface for users with an beautiful ui and also lucrative for upcoming startups in the sectors</p>
                    <button className="mt-4 bg-rootOrange hover:bg-primary/80 px-4 py-2 rounded-3xl text-white font-semibold">View More Work →</button>
                </div>
                <div className="flex-1 mt-8 md:mt-0">
                    <img className='pb-7' src={profIMG2} alt="" />
                    <h2 className="text-xl font-bold">CENT - Payment App Landing Website</h2>
                    <p className="mt-2 text-muted-foreground">This website has become one of the best ux interface for users with an beautiful ui and also lucrative for upcoming startups in the sectors</p>
                </div>
            </div>
        </div>
    )
}

export default Profile