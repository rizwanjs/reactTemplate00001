import React from 'react'
import ProductCard from '../Product Card/productcard'

import img1 from '../../assets/01.webp'
import img2 from '../../assets/02.webp'
import img3 from '../../assets/03.webp'
import img4 from '../../assets/04.webp'
import img5 from '../../assets/05.webp'

const products = [
    { image: img1, name: 'Classic White Sneakers', price: '49' },
    { image: img2, name: 'Leather Crossbody Bag', price: '79' },
    { image: img3, name: 'Denim Jacket', price: '99' },
    { image: img4, name: 'Summer Floral Dress', price: '59' },
    { image: img5, name: 'Aviator Sunglasses', price: '35' },
]

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
