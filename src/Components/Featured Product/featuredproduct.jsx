import React from 'react'
import ProductCard from '../Product Card/productcard'

const featuredproduct = () => {
    return (
        <div>

            <div className="flex items-center mt-2 justify-center flex-col gap-2">
                <h1 className="text-3xl font-bold">Featured Products</h1>
                <p>The purpose of lorem ipsum</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>

        </div>
    )
}

export default featuredproduct
