import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/header'
import FeaturedProduct from './Components/Featured Product/featuredproduct'
import Footer from './Components/Footer/footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <FeaturedProduct />
      <Footer />
    </>
  )
}

export default App
