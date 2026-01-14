import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense,lazy } from 'react'
import { getProfile } from './services/auth.js';
import { useFetchData } from './hooks/useFetchData.js';

const Home = lazy(() => import('./pages/home.jsx'));
const About = lazy(() => import('./pages/about/about.jsx'));
const Contact = lazy(() => import('./pages/contact/contact.jsx'));
const Menu = lazy(() => import('./pages/menu.jsx'));
const ProductDetail = lazy(() => import('./pages/product/ProductDetail.jsx'));

function App() {

  const { data, loading, error } = useFetchData(getProfile, 'profile');

  console.log('Profile Data:', data);

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
