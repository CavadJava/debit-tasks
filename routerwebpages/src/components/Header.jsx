
import { useNavigate } from "react-router-dom";

import './header.css';
export default function Header() {

    // const navigate = useNavigate();
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#8755ff",
        border: "none",
        padding: "10px 20px",
        color: "#fff"
        
    };
    const headerNavsList = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "10px 16px 10px 0px",
    };

    const navigate = useNavigate();


    return (
        <header >
            <div className="header" style={headerStyle}>
                <div className="logo">
                    <img width="90" height="50" src="https://router-web-topic-7.vercel.app/assets/logo-c4d5eaee.png"/>
                </div>
                <div className="header-navs">
                    <nav className="header-navs-list" style={headerNavsList}>
                        <li><button onClick={()=>navigate('/')}>Home</button></li>
                        <li><button onClick={()=>navigate('/about')}>About</button></li>
                        <li><button onClick={()=>navigate('/contact')}>Contact</button></li>    
                        <li><button onClick={()=>navigate('/menu')}>Menu</button></li>    
                    </nav>
                </div>
            </div>
        </header>
    )
}