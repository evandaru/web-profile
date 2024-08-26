function Experience() {
    return (
        <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
                <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                    Experience
                </h1>
                <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, adipisci!
                </p>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                        <h6 className="font-medium text-gray-400 text-base uppercase">
                            Company
                        </h6>
                        <p className="font-semibold text-gray-600 text-base">
                            PT. Permata Ilmu{" "}
                            <span className="font-normal text-gray-300">/ Karanganyar</span>
                        </p>
                        <p className="font-semibold text-gray-600 text-base">
                            Binaqu Academy{" "}
                            <span className="font-normal text-gray-300">/ Palangkaraya</span>
                        </p>
                        <p className="font-semibold text-gray-600 text-base">
                            Kursus Bahasa Arab Al Muyassar{" "}
                            <span className="font-normal text-gray-300">/ Palembang</span>
                        </p>
                    </div>
                    <div className="hidden lg:flex flex-col space-y-8 md:space-y-16">
                        <h6 className="font-medium text-gray-400 text-base uppercase">
                            Position
                        </h6>
                        <p className="font-normal text-gray-400 text-base">
                            Admin
                        </p>
                        <p className="font-normal text-gray-400 text-base">
                            Designer
                        </p>
                        <p className="font-normal text-gray-400 text-base">
                            Designer
                        </p>
                    </div>
                    <div className="hidden lg:flex flex-col space-y-8 md:space-y-16">
                        <h6 className="font-medium text-gray-400 text-base uppercase">
                            Year
                        </h6>
                        <p className="font-normal text-gray-400 text-base">2024 - now</p>
                        <p className="font-normal text-gray-400 text-base">2020 - now</p>
                        <p className="font-normal text-gray-400 text-base">2020 - 2021</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience