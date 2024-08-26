function Skill() {
    return (
        <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 px-8 py-10 rounded-md">
                        <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                            <i data-feather="activity" />
                        </div>
                        <h4 className="font-medium text-gray-700 text-lg mb-4">
                            Developers
                        </h4>
                        <p className="font-normal text-gray-500 text-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis impedit commodi fuga nemo. Est ducimus omnis at aut illum.
                        </p>
                    </div>
                    <div className="bg-gray-50 px-8 py-10 rounded-md">
                        <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                            <i data-feather="codesandbox" />
                        </div>
                        <h4 className="font-medium text-gray-700 text-lg mb-4">
                            Designer
                        </h4>
                        <p className="font-normal text-gray-500 text-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, possimus repudiandae hic debitis mollitia distinctio officiis incidunt deleniti quaerat!
                        </p>
                    </div>
                    <div className="bg-gray-50 px-8 py-10 rounded-md">
                        <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                            <i data-feather="coffee" />
                        </div>
                        <h4 className="font-medium text-gray-700 text-lg mb-4">
                            Admin
                        </h4>
                        <p className="font-normal text-gray-500 text-md">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque velit vitae animi impedit quisquam fugiat quia et id itaque autem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skill