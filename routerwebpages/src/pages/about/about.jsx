import { Routes, Route, Link } from "react-router-dom";
import Headers from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import './about.css'

export default function About() {
    return (
        <>
        <Headers/>
            <div className="about-page">
                <h1>Learn About Us</h1>
                <img 
                    src="https://router-web-topic-7.vercel.app/assets/port-8b357f33.jpg" 
                    alt="About Us"
                    style={{ 
                        height: "60vh", 
                        marginTop: "12px", 
                        marginBottom: "24px" 
                    }} 
                />
                <Link to="/about/company">About Company</Link>
                <Link to="/about/products">About Products</Link>
                {/* <Routes>
                    <Route path="/about/company" element={<h2>About Company</h2>} />
                    <Route path="/about2/products" element={<h2>About Products</h2>} />
                </Routes> */}
            </div>
        <Footer/>
        </>
    )
}