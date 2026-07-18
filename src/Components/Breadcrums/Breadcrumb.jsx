function Breadcrumb() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
      <a href="#" className="hover:text-gray-800">Home</a>
      <span className="mx-2 text-gray-400">›</span>
      <a href="#" className="hover:text-gray-800">Shop</a>
      <span className="mx-2 text-gray-400">›</span>
      <span className="text-gray-800">Page Details</span>
    </div>
  )
}

export default Breadcrumb;
