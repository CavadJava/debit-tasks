import Home from './pages/home.jsx'
import About from './pages/about/about.jsx'
import Contact from './pages/contact/contact.jsx'
import Menu from './pages/menu.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/product/ProductDetail.jsx'
import { Suspense } from 'react'

function App() {

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:menuId" element={<ProductDetail />}  />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
