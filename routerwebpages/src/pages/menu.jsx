import Footer from '../components/footer.jsx'
import Headers from '../components/header.jsx'
import Product from './product/Product.jsx'
export default function Menu() {
    return (
        <>
            <Headers/>
            <div>
                <Product/>
            </div>
            <Footer/>
        </>

    )
}