import { useNavigate } from 'react-router-dom'
import './product.css';
export default function Product() {
    const navigate = useNavigate();

    return (
        <>
            <div className="product">
                <h1>Our Products</h1>
                <div className="menu-products">
                    <div className="menu-product">
                        <img className='detail-image' src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="pizza"/>
                        <h2>Essence Mascara Lash ...</h2>
                        <h3>The Essence Mascara Lash ...</h3>
                        <h4>Essence</h4>
                        <p>$ 9.00</p>
                        <button onClick={()=>navigate('/menu/1')}>Go Details Page</button>
                    </div>
                </div>
            </div>
        </>
    )
}