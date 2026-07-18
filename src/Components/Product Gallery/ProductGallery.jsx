import { useParams } from 'react-router-dom'
import { products } from '../Product/product'

function ProductGallery() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return <p className="text-center text-gray-500">Product not found</p>
  }

  const isProduct4 = product.id === 4

  return (
    <div>
      <div className={`rounded-md overflow-hidden bg-gray-100 mb-4 ${isProduct4 ? 'aspect-[3/4]' : 'aspect-square'}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover ${isProduct4 ? 'object-top' : ''}`} 
        />
      </div>
      <div className="img-grid grid grid-cols-4 gap-3">
        <div className={`rounded-md overflow-hidden bg-gray-100 ${isProduct4 ? 'aspect-[3/4]' : 'aspect-square'} border-2 border-gray-900`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full object-cover ${isProduct4 ? 'object-top' : ''}`} 
          />
        </div>
      </div>
    </div>
  )
}

export default ProductGallery;