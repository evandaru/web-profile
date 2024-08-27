import React from 'react';

const Footer = () => {
    return (
        <footer id='contact us' className="py-10">
            <div className="container mx-auto text-center">
                <div className="flex md:justify-start justify-center space-x-4 mb-4">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#portfolio" className="hover:underline">Portfolio</a>
                    <a href="#Footer" className="hover:underline">Contact Us</a>
                </div>
                <hr className="border-gray-600 mb-4" />
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className="text-sm mb-4">Made with 💙 by Fauzan. All rights reserved.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:underline">Mail</a>
                        <a href="#" className="hover:underline">Github</a>
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Linkedin</a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
