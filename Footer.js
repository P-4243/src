import React from 'react';
import './Navbar+Footer+etc.css';
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <p className="address">info@vidar.in<br />
                        B-47, Sector-63, Noida, UP, 201301
                    </p>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Building Tech Professionals</a></li>
                        <li><a href="#">Startup Tech Assistance</a></li>
                        <li><a href="#">Hackathon Development</a></li>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Research & Development</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li><i className='bx bxs-phone'></i> +91 7042630789</li>
                        <li><i className='bx bx-envelope'></i> info@gohackathon.in</li>
                        <li><i className='bx bx-envelope'></i> hr@gohackathon.in</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
