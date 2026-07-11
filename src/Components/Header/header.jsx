import React from 'react'
import headerImage from '../../assets/s_1.webp'

const header = () => {
    return (
        <div className="flex items-center justify-around bg-blue-500 text-white">

            <div >
                <h2 className=" text-2xl font-semibold">
                    New Arrival
                </h2>
                <h2 className=" mt-6 text-3xl font-bold">
                    Women Fashion
                </h2>
                <p className="italic">
                    Last call for upto 25%
                </p>

                <button className="bg-black mt-2 h-10 w-26 ">Shop Now</button>

            </div>


            <div></div>

            <div >
                <img src={headerImage} alt="Header Image" />
            </div>

        </div>
    )
}

export default header
