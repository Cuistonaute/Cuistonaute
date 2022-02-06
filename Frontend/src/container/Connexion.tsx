import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";


const Connexion = () => {
    return (
        <>
            <section className="connexion-page">
                <article >
                    <form className="article-form"> 
                        <input type='text' placeholder="E-mail"></input>
                        <input type='password' placeholder="Mot de passe"></input>
                        <button type="submit">Se connecter</button>
                    </form>
                </article>
                <article className="article-socials">
                    <p>Connectez-vous également via les réseaux sociaux :</p>
                    <Socials/>
                </article>
                <article className="article-inscription">
                    <p>Ou alors inscrivez-vous <NavLink to="/Inscription">ici !</NavLink></p> 
                </article>
            </section>          
        </>
        
    );
}

export default Connexion;