import Navbar from "./Navbar"

function Header() {
    return (
        <section className="py-10 md:py-10">
            <div className="container max-w-screen-xl mx-auto px-4">
                <Navbar />
                <div className="text-center">
                    <div className="flex justify-center mb-16">
                        <img className='rounded-full w-36' src="https://www.evandaru.site/photo.jpg" alt="Image" />
                    </div>
                    <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                        Fauzan Hasyim
                    </h6>
                    <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
                        Website Developer
                    </h1>
                    <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                        I have a passion for software. I enjoy creating tools that make life
                        easier for people.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Header