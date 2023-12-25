import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div className='footer-links'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNASt50W1KrN707n1pipa2eS-j4vWM7Vf8A&usqp=CAU" alt="" />
                    <h2>Career Club</h2>
                    <p>Focus your own career. Golden career is crown of your life</p>
                    <div className='social-icon'>
                        <FontAwesomeIcon icon={faFacebook} fade size="xl" style={{ color: "#377ffb" }} />
                        <FontAwesomeIcon icon={faTwitter} fade size="xl" style={{ color: "#10e5f4", marginLeft: 20 }} />
                        <FontAwesomeIcon icon={faInstagram} fade size="xl" style={{ color: "#e538df", marginLeft: 20 }} />
                    </div>
                </div>
                <div className='footer-links'>
                    <h4>Company</h4>
                    <a href="/aboutus">About us</a>
                    <a href="/home">Latest News</a>
                    <a href="/home">Work</a>
                    <a href="/home">Careers</a>
                </div>
                <div className='footer-links'>
                    <h4>Product</h4>
                    <a href="/home">Plans & Pricing</a>
                    <a href="/home">Prototype</a>
                    <a href="/home">Customers</a>
                    <a href="/home">Integrations</a>
                </div>
                <div className='footer-links'>
                    <h4>Support</h4>
                    <a href="/home">Help Desk</a>
                    <a href="/home">Sales</a>
                    <a href="/home">Become a Partner</a>
                    <a href="/home">Developers</a>
                </div>
                <div className='footer-links'>
                    <h4>Contact</h4>
                    <p>34/D New Eskaton Road, <br /> Banglamotor, Dhaka-1205, Bangladesh</p>
                </div>
            </div>
            <div className='footer-credit'>
                <div className='footer-credit-info'>
                    <div className='footer-first-credit'>
                        <p>@ <span>CAREER CLUB</span>. All Rights Reserved.</p>
                    </div>
                    <div>
                        <p>Developed By M@Z€D MOHAMM€D</p>
                    </div>
                    <div className='footer-second-credit'>
                        Powered By Career Club
                    </div>
                </div>
            </div>
        </div>
    )
}
