import Footer from '../../components/footer.jsx'
import Headers from '../../components/header.jsx'
import './productdetail.css'
export default function ProductDetail() {

    const pdImageStyle = {
        width: '1072px',
        height: '400px'
    }
    
    const detailImageStyle = {
        objectFit:'cover',
        width:'100%',
        height:'100%'
    }
    const cardBodyStyle = {
        backgroundColor: '#292929',
        color: '#fff',
        flexDirection: 'column',
        padding: '10px',
        borderRadius: '10px',
        height: '150px',
        marginBottom: '10px',
        width: '1060px',
        height: '130px'
    }
    
    return (
        <>
            <Headers/>
            <div className="product-detail-page">
                <div className="product-detail"
                 style={{marginTop:'40px',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div className="pd-image" style={pdImageStyle}>
                        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="pizza" width="1072" height="400" className='detail-image' style={detailImageStyle}/>
                    </div>
                    <div className="cardBody flex" style={cardBodyStyle}>
                        <h2>The Essence Mascara Lash Princess is a popular mas</h2>
                        <p>$ 9.00</p>
                        <h3>Essence</h3>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}