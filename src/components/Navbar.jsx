function Navbar() {
    return (
        <nav className="flex items-center justify-between mb-40 ">
            <img className="w-36" src="assets/image/logo-programer.svg" alt="Logo" />
            <a target='_blank' href="https://blog.evandaru.site">
                <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                    My Blog
                </button>
            </a>
        </nav>
    )
}
export default Navbar