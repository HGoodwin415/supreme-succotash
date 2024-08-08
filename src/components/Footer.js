import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";


function Footer() {
    return(
        <footer className="footer">

            <image className="footer-logo">
            <img src={logo} alt="Little Lemon logo" />
            </image>

            <section className="footer-nav">
            <h4>Doormat Navigation</h4>

            <ul>
            <Link to="/" className='footer-nav-item'>Home</Link>
            <Link to="/about" className='footer-nav-item'>About</Link>
            <Link to="/menu" className='footer-nav-item'>Menu</Link>
            <Link to="/reservations" className='footer-nav-item'>Reservations</Link>
            <Link to="/orderonline" className='footer-nav-item'>Order Online</Link>
            <Link to="/login" className='footer-nav-item'>Login</Link>
            </ul>
            </section>


            <section className="contact">
            <h4>Contact</h4>

            <address>
                Little Lemon<br/> 
                121 Lemon Parkway <br/> 
                Chicago, IL 60604<br/>
                Phone number: (773)123-4567<br/>
                Email: info@littlelemon.com
            </address>

            </section>

            <section className="social-links">
            <h4>Social Media Links</h4>
              <ul>
                <button>Facebook</button>
                <button>Instagram</button>
                <button>X</button>
              </ul>
              </section>


        </footer>
    );
};


export default Footer;