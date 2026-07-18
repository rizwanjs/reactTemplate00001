import rel1 from '../../assets/s_1.webp'
import rel2 from '../../assets/s_2.webp'
import rel3 from '../../assets/s_3.webp'
import rel4 from '../../assets/s_4.webp'
import rel5 from '../../assets/s_5.webp'

const RELATED = [
  { id: 1, name: 'Floral Summer Dress', price: 38, img: rel1 },
  { id: 2, name: 'Striped Casual Shirt', price: 29, img: rel2 },
  { id: 3, name: 'Denim Jacket', price: 64, img: rel3 },
  { id: 4, name: 'Slim Fit Jeans', price: 45, img: rel4 },
  { id: 5, name: 'Classic Polo Tee', price: 24, img: rel5 },
]

function RelatedProducts() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">You may also like</h2>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">View all</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {RELATED.map((p) => (
          <a
            key={p.id}
            href="#"
            className="group block rounded-md overflow-hidden bg-gray-100 border border-transparent hover:border-gray-200 transition"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-3 bg-white">
              <p className="text-sm text-gray-900 font-medium truncate">{p.name}</p>
              <p className="text-sm text-gray-500 mt-1">${p.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts;
