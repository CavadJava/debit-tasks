import { useState } from "react";
import Headers from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import './about.css'

export default function About() {
    const [activeTab, setActiveTab] = useState();

    const handleAboutCompany = () => {
        setActiveTab("company");
    }
    const handleAboutProducts = () => {
        setActiveTab("product");
    }


    return (
        <>
            <Headers/>
            <div className="about-page" style={{ textAlign: "center" }}>
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
                
                <div className="button-group">
                    <button style={{
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
     onClick={handleAboutCompany}>About Company</button>
                    <button onClick={handleAboutProducts}>About Products</button>
                </div>
                
                {
                    activeTab === 'company' ?
                    (<h1>About Company</h1> )
                        : activeTab === 'product' ?
                    (<h1>About Product</h1>)
                        : (<p></p>)
                }
                
            </div>
            <Footer/>
        </>
    )
}