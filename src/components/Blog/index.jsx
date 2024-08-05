import blogImg from '../../assets/img/blog/Rectangle 176 (1).png'
import blogImg2 from '../../assets/img/blog/Rectangle 177.png'

const Blog = () => {
    return (
        <div className="container mx-auto my-0">
            <div className="bg-background text-foreground p-6">
                <div className="text-center mb-8">
                    <span className="text-rootOrange font-semibold tracking-widest">blog</span>
                    <h1 className="text-4xl font-bold mt-2">We Publish Blogs Every Week</h1>
                    <p className="text-muted-foreground mt-2">We understand how desperately you want to grow in the business world & our motto <br /> is to help you with practical ideas and plans</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card p-4 rounded-lg shadow-lg relative">
                        <img src={blogImg} alt="Doctors discussing in a meeting room" className="rounded-lg w-full" />
                        <div className="absolute top-4 right-4 bg-rootGreen text-white py-1 px-4 rounded-lg">
                            <span className="block text-center">22</span>
                            <span className="block text-center">Dec</span>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Upgrowing Economy Needs More Startups</h2>
                            <p className="text-muted-foreground mt-2">We understand how desperately you want to grow in the business world & our motto is to help you with practical ideas and plans</p>
                            <button className="bg-rootOrange text-white font-semibold mt-4 py-2 px-4 rounded-3xl flex items-center">
                                Learn More <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow-lg relative">
                        <img src={blogImg2} alt="Team working in a modern office" className="rounded-lg w-full" />
                        <div className="absolute top-4 right-4 bg-rootGreen text-white py-1 px-4 rounded-lg">
                            <span className="block text-center">16</span>
                            <span className="block text-center">Dec</span>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Team Has Some Unique Feature - What Yours?</h2>
                            <p className="text-muted-foreground mt-2">We understand how desperately you want to grow in the business world & our motto is to help you with practical ideas and plans</p>
                            <button className="bg-accent text-rootGreen font-semibold mt-4 py-2 px-4 rounded-lg flex items-center">
                                Learn More <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog