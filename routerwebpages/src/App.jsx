import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense,lazy } from 'react'
import { getProfile } from './services/auth.js';
import { useFetchData } from './hooks/useFetchData.js';
import Login from './pages/auth/login.jsx';
import SignUp from './pages/auth/signup.jsx';
import NotFound from './pages/not_found.jsx';

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

        { !data ? (
          <>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </>
         ) :
        <>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:menuId" element={<ProductDetail />}  />

        </>
      }
          <Route path="/*" element={<NotFound/>} />
          {/* <Route path="*" element={<Navigate to ={ data ? "/" : "/auth/login"} />} /> */}
        </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
