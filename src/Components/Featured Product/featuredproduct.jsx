import React from 'react'
import ProductCard from '../Product Card/productcard'
import { products } from '../Product/product'

const FeaturedProduct = () => {
    return (
        <div>
            <div className="flex items-center mt-2 justify-center flex-col gap-2">
                <h1 className="text-3xl font-bold">Featured Products</h1>
                <p>The purpose of lorem ipsum</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProduct