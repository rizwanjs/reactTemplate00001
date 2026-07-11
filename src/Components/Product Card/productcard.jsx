import React from 'react'
import defaultimage from '../../assets/08.webp'

const ProductCard = ({
    image = defaultimage,
    name = 'Product Name',
    price = '49',
}) => {
    return (
        <div className="w-64 bg-white rounded-md shadow-md overflow-hidden">
           
            <div className="relative group overflow-hidden">
                <img src={image} alt={name} className="w-full h-72 object-cover" />

                
                <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center gap-4 py-3 bg-black/40 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    
                    <button type="button" aria-label="Add to wishlist" className="text-white hover:text-red-500 transition-colors">
                        <i class="fa-regular fa-heart"></i>
                    </button>

                    
                    <button type="button" aria-label="Add to cart" className="text-white hover:text-gray-200 transition-colors">
                        <i class="fa-solid fa-cart-plus fa-lg"></i>
                    </button>

                    
                    <button type="button" aria-label="Quick view" className="text-white hover:text-gray-200 transition-colors">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </button>
                </div>
            </div>


            <div className="flex flex-col items-center gap-1 py-4">
                <h3 className="text-base font-medium text-gray-800">{name}</h3>
                <p className="text-gray-700 text-sm">${price}</p>
            </div>
        </div>
    )
}

export default ProductCard