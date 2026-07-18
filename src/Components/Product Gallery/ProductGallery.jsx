import img1 from '../../assets/01.webp'
import img2 from '../../assets/02.webp'
import img3 from '../../assets/03.webp'
import img4 from '../../assets/04.webp'

function ProductGallery() {
  return (
    <div>
      <div className="rounded-md overflow-hidden bg-gray-100 mb-4 aspect-square">
        <img src={img1} alt="Check Pink Kurta" className="w-full h-full object-cover" />
      </div>
      <div className="img-grid grid grid-cols-4 gap-3">
        <div className="rounded-md overflow-hidden bg-gray-100 aspect-square border-2 border-gray-900">
          <img src={img1} alt="Kurta 1" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-md overflow-hidden bg-gray-100 aspect-square border-2 border-transparent hover:border-gray-300 transition">
          <img src={img2} alt="Kurta 2" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-md overflow-hidden bg-gray-100 aspect-square border-2 border-transparent hover:border-gray-300 transition">
          <img src={img3} alt="Kurta 3" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-md overflow-hidden bg-gray-100 aspect-square border-2 border-transparent hover:border-gray-300 transition">
          <img src={img4} alt="Kurta 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default ProductGallery;
