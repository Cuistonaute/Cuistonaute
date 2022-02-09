import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className="social-icons">
                <p className='title-icons'>Retrouvez-nous sur :</p>
                <a className='fb' href='https://facebook.com/Cuistonaute' target="_blank"><i className='fab fa-2x fa-facebook-square'></i></a>
                <a className='insta' href="https://instagram.com/Cuistonaute" target="_blank"><i className='fab fa-2x fa-instagram-square'></i></a>
                <a className='twitter' href='https://twitter.com/Cuistonaute' target="_blank"><i className='fab fa-2x fa-twitter-square'></i></a>                  
            </section>
            <section className='links'>
                <p className='contact'>
                <NavLink className="contact" to="/Contact">
                    Contact             
                </NavLink>
                </p>
                <p className='rgpd'>
                <NavLink className="rgpd" to="/Politique">
                    Politique de confidentialité           
                </NavLink>
                </p>
                <p className='cgu'>
                <NavLink className="cgu" to="/Mentions">
                    Mentions Légales          
                </NavLink>
                </p>
            </section>
            <section className='apps'>
                <article className="card-footer-desktop">
                    <a className='app-desk' href='#'>
                        <i className="fas fa-2x fa-desktop"></i>             
                        <p className='appdesk-text'>Appli Desktop</p>
                    </a>
                </article>
                <article className="card-footer-mobile">
                    <a className='app-mobile' href='#'>
                        <i className="fas fa-2x fa-mobile-alt"></i>             
                        <p className='appmobile-text'>Appli Desktop</p>
                    </a>
                </article>
            </section>

        </footer>
    );
};

export default Footer;