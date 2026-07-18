import React from 'react'
import logo from '../../assets/logo.webp'

const footer = () => {
    return (
        <div className="flex items-center justify-around h-64 text-gray-800 bg-gray-50 mt-6">
            <div>

                <img className="h-10" src={logo} alt="Logo" />

                <h3 className="text-lg font-semibold">About Us</h3>

                <p>There are many variations of passages of Lorem</p>
                <p>Ipsum available, but the majority have suffered</p>
                <p> alteration in some form, by injected</p>
                <p> humour, or randomised words which </p>
                <p>don't look even slightly believable.</p>

                <a className="text-blue-500 hover:underline cursor-pointer" href="#">Read More</a>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">
                    Explore
                </h2>
                <a className="hover:underline cursor-pointer" href="#">Fashion</a>
                <a className="hover:underline cursor-pointer" href="#">Women</a>
                <a className="hover:underline cursor-pointer" href="#">Furniture</a>
                <a className="hover:underline cursor-pointer" href="#">Shoes</a>
                <a className="hover:underline cursor-pointer" href="#">Topwear</a>
                <a className="hover:underline cursor-pointer" href="#">Brands</a>
                <a className="hover:underline cursor-pointer" href="#">Kids</a>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">
                    Company
                </h2>
                <a className="hover:underline cursor-pointer" href="#">About Us</a>
                <a className="hover:underline cursor-pointer" href="#">Contact Us</a>
                <a className="hover:underline cursor-pointer" href="#">FAQ</a>
                <a className="hover:underline cursor-pointer" href="#">Privacy</a>
                <a className="hover:underline cursor-pointer" href="#">Terms</a>
                <a className="hover:underline cursor-pointer" href="#">Complaints</a>
            </div>
            <div>
                <h2 className="text-lg font-semibold">
                    Support
                </h2>
                <p className="hover:underline cursor-pointer">support@example.com</p>

                <h2 className="text-lg font-semibold">
                    Toll Free
                </h2>
                <p className="hover:underline cursor-pointer">+1 234 567 890</p>
            </div>
        </div>
    )
}

export default footer
