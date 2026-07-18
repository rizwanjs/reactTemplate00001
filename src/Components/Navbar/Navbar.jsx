import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'

const Navbar = () => {
    return (

        <section className="sticky top-0 z-50 flex items-center h-14 bg-gray-200 justify-around" >

            <div className="flex items-center justify-around">
                
                <div></div>

                <div >
                    <img className="mr-10 h-10" src={logo} alt="Logo" />
                </div>

                <div className="flex flex-wrap gap-10 text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/"></Link>
                    <Link to="/">Home</Link>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Cart</a>
                    <a href="#">Account</a>
                    <a href="#">Help</a>
                </div>
            </div>



            <div className="flex gap-5">
                <i class="fa-regular fa-moon fa-xl"></i>
                <i class="fa-solid fa-magnifying-glass fa-xl"></i>
                <i class="fa-regular fa-heart fa-xl"></i>
                <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
                <i class="fa-regular fa-circle-user fa-xl"></i>
            </div>

        </section>

    )
}

export default Navbar
