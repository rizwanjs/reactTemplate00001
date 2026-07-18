import React from 'react'
import { Link } from 'react-router-dom'
import defaultimage from '../../assets/08.webp'
import { products } from '../../Components/Product/product'

const ProductCard = ({
    id,
    image = defaultimage,
    name = 'Product Name',
    price = '49',
}) => {
    return (
        <div className="w-64 bg-white rounded-md shadow-md overflow-hidden">
            <div className="relative group overflow-hidden">
                <img src={image} alt={name} className="w-full h-72 object-cover" />
                {/* ... wishlist/quick-view buttons same rahenge ... */}
            </div>

            <div className="flex flex-col items-center gap-1 py-4">
                <h3 className="text-base font-medium text-gray-800">{name}</h3>
                <p className="text-gray-700 text-sm">${price}</p>
            </div>

            <Link
                to={`/product/${id}`}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors text-center block"
            >
                Add to Cart
            </Link>
        </div>
    )
}

export default ProductCard