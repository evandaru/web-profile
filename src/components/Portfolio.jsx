function Portfolio() {
    return (
        <div id="portfolio" className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="mb-10 lg:mb-0">
                        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                            Portfolio
                        </h1>
                        <p className="font-normal text-gray-500 text-xs md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corrupti.
                        </p>
                    </div>
                    <div className="space-y-24">
                        <div className="flex space-x-6">
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                                01
                            </h1>
                            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
                            <div>
                                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                                    <a href="https://ai-lele.vercel.app/">
                                        Chat Gpt - Gemini 1.5 Pro
                                    </a>
                                </h1>
                                <p className="font-normal text-gray-500 text-sm md:text-base">
                                    Sebuah generator API dummy data yang terdokumentasi, gratis untuk digunakan, untuk memudahkan proses pengujian bagian front-end proyek.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                                02
                            </h1>
                            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
                            <div>
                                <a href="https://t.me/lelee2_bot">
                                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                                        Bot Telegram - Groq - CRUD
                                    </h1>
                                </a>
                                <p className="font-normal text-gray-500 text-sm md:text-base">
                                    Bot Telegram yang memungkinkan pengguna untuk melakukan operasi CRUD langsung dari chat, membantu mempercepat workflow.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                                03
                            </h1>
                            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
                            <div>
                                <a href="https://donatur.vercel.app/">
                                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                                        Donation WEB - Notion Database
                                    </h1>
                                </a>
                                <p className="font-normal text-gray-500 text-sm md:text-base">
                                    Aplikasi web untuk pengelolaan donasi yang terintegrasi dengan Notion sebagai basis datanya, memudahkan pelaporan dan manajemen dana.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Portfolio