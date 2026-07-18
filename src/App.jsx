import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/header'

import FeaturedProduct from './Components/Featured Product/featuredproduct'
import AppDownload from './Components/AppDownload/AppDownload'
import Footer from './Components/Footer/footer'

import Breadcrumb from './Components/Breadcrums/Breadcrumb'
import ProductGallery from './Components/Product Gallery/ProductGallery'
import ProductInfo from './Components/Productinfo/ProductInfo'
import RelatedProducts from './Components/Related Product/RelatedProducts'

function Home() {
  return (
    <>
      <Navbar />
      <Header />
    
      <FeaturedProduct />
      <AppDownload />
      <Footer />
    </>
  )
}

function ProductDetail() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery />
        <ProductInfo />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <RelatedProducts />
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
