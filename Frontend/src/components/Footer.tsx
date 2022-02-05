import React from 'react';

const Footer = () => {
    return (
        <footer>
            <section className="social-icons">
                <h4>Retrouvez-nous sur :</h4>
                <a href='https://facebook.com/Cuistonaute' target="_blank"><i className='fab fa-facebook-square'></i></a>
                <a href="https://instagram.com/Cuistonaute" target="_blank"><i className='fab fa-instagram-square'></i></a>
                <a href='https://twitter.com/Cuistonaute' target="_blank"><i className='fab fa-twitter-square'></i></a>                  
            </section>
            <section className='links'>
                <p>
                    <a href='/Contact'>Contact</a>
                </p>
                <p>
                    <a href='/PolitiqueConfidentialite'>Politique de confidentialité</a> 
                </p>
                <p>
                    <a href='/CGU'>Mentions Légales</a> 
                </p>
            </section>
            <section className='apps'>
               <a href='#'><img src='./logo192.png' alt='Appli desktop'/></a>
               <a><img src="./logo512.png" alt="Appli Mobile"/></a>
            </section>
        </footer>
    );
};

export default Footer;