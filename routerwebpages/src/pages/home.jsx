import { useNavigate } from 'react-router-dom'
import Headers from '../components/header.jsx'
import Footer from '../components/footer.jsx';
import './home.css';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Headers/>
                <div className="homeImg">
                    <div className="homeContent">
                        <button onClick={()=>navigate('/menu')}>Order</button>
                    </div>
                </div>
            <Footer/>
        </>
    )
}