import React from 'react';

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
                    <a href='/Contact'>Contact</a>
                </p>
                <p className='rgpd'>
                    <a href='/PolitiqueConfidentialite'>Politique de confidentialité</a> 
                </p>
                <p className='cgu'>
                    <a href='/CGU'>Mentions Légales</a> 
                </p>
            </section>
            <section className='apps'>
                <article className="card-footer">
                    <a className='appDesk' href='#'>
                        <img className="imgApp1" src='./logo192.png' alt='Appli desktop'/>             
                        <p>Appli Desktop</p>
                    </a>
                </article>
            </section>

               {/* <a><img src="./logo512.png" alt="Appli Mobile"/></a> */}
        </footer>
    );
};

export default Footer;