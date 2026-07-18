function ProductInfo() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold text-gray-900">Check Pink Kurta</h1>
      <p className="text-sm text-gray-500 mt-1">Women Pink &amp; Off-White Printed Kurta with Palazzos</p>

      <div className="flex items-center gap-3 mt-4">
        <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-0.5 rounded">4.8</span>
        <span className="text-sm text-gray-600">162 Ratings</span>
      </div>

      <hr className="my-5 border-gray-200" />

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-semibold text-gray-900">$458</span>
      </div>
      <p className="text-sm text-green-600 mt-1">inclusive of all taxes</p>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Select Size</h3>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="size-btn w-12 h-10 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:border-gray-500 transition">XS</button>
          <button type="button" className="size-btn w-12 h-10 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:border-gray-500 transition">S</button>
          <button type="button" className="size-btn w-12 h-10 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:border-gray-500 transition">M</button>
          <button type="button" className="size-btn w-12 h-10 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:border-gray-500 transition">L</button>
          <button type="button" className="size-btn w-12 h-10 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:border-gray-500 transition">XL</button>
          <button type="button" className="size-btn w-12 h-10 rounded-full border-2 border-gray-900 text-sm font-medium text-gray-900">XXL</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button type="button" className="bg-gray-900 hover:bg-gray-800 text-white py-3.5 rounded font-medium flex items-center justify-center gap-2 transition">
          <i className="fa-solid fa-bag-shopping"></i>
          ADD TO BAG
        </button>
        <button type="button" className="border border-gray-800 hover:bg-gray-50 text-gray-900 py-3.5 rounded font-medium flex items-center justify-center gap-2 transition">
          <i className="fa-regular fa-heart"></i>
          WISHLIST
        </button>
      </div>

      <hr className="my-6 border-gray-200" />

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Product Details</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          There are many variations of passages of Lorem Ipsum. All the Lorem Ipsum
          generators on the Internet tend to repeat. Contrary to popular belief,
          Lorem Ipsum is not simply random text — it has roots in a piece of classical literature.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mt-3">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum.
        </p>
      </div>
    </div>
  )
}

export default ProductInfo;
