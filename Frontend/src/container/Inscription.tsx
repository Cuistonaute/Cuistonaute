import React from 'react';
import Socials from '../components/Socials';

const Inscription = () => {
    return (
        <>
        <section>
             <article className="connexion-form">
                <form action="">
                    <p>Inscrivez-vous en complétant ces champs</p>
                    <input type="text" placeholder="Prénom et Nom"></input>
                    <input type="mail" placeholder="Adresse e-mail"></input>
                    <input type="password" placeholder="Mot de passe"></input> 
                    <input type="password" placeholder="Confirmation mot de passe"></input> 
                </form>            
            </article>
            <article className="socials-connexion">
                <p>Ou vous inscrire avec :</p> 
                <Socials />                  
            </article> 
        {/* <a href="/PolitiqueConfidentialite">RGPD</a> */}
        {/* <input type='checkbox' name="cgu">Conditions Générales</input>  */}
        <button type="submit">Envoyer</button> 
        <a href="/CGU">Mentions Légales</a>
        </section>
    </>
    );
};

export default Inscription;