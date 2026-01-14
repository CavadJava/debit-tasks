import Headers from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import './contact.css'

export default function Contact() {
    return (
        <>
            <Headers/>
            <div className="contact-page">
                <div className="contact">
                    <div className="left">
                        <img src="https://router-web-topic-7.vercel.app/assets/ss-1a4bc1c1.jpg" />
                    </div>
                    <div className="right">
                    <h1>Contact Page</h1>
                    <form>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" placeholder="Enter Your Fullname..." name="fullname"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Your Email..." name="email"/>
                        <label htmlFor="message">Message</label>
                        <textarea placeholder="Enter Your Message..." name="message"></textarea>
                    </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}