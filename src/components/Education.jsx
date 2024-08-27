function Education() {
    return (<section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Education
            </h1>
            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
                Di bawah ini adalah ringkasan tempat-tempat saya belajar
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 className="font-medium text-gray-700 text-lg mb-4">
                        2019 – 2021
                    </h4>
                    <p className="font-normal text-gray-500 text-md mb-4">
                        Sekolah Menengah Atas
                    </p>
                    <div className="relative">
                        <h6 className="font-semibold text-gray-500 text-md relative z-10">
                            Ponpes Imam Bukhari
                        </h6>
                        <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0" />
                    </div>
                </div>
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                    <h4 className="font-medium text-gray-700 text-lg mb-4">
                        2021 – now
                    </h4>
                    <p className="font-normal text-gray-500 text-md mb-4">
                        SI - Teknik Informatika
                    </p>
                    <div className="relative">
                        <h6 className="font-semibold text-gray-500 text-md relative z-10">
                            Universitas Duta Bangsa Surakarta
                        </h6>
                        <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0" />
                    </div>
                </div>

            </div>
        </div>
    </section>)
}

export default Education