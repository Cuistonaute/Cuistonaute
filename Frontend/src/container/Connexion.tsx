import Socials from "../components/Socials";

const Connexion = () => {
    return (
        <>
            <section className="connect-form">
                <article>
                    <form>
                        <input type='text' placeholder="E-mail"></input>
                        <input type='password' placeholder="Mot de passe"></input>
                        <button type="submit">Se connecter</button>
                    </form>
                </article>
                <article>
                    <p>Connectez-vous également via les réseaux sociaux :</p>
                    <Socials />
                </article>
                <article>
                    <p>Ou alors inscrivez-vous <a href='/Inscription'> ici</a> !</p>
                </article>
            </section>
            
        </>
        
    );
}

export default Connexion;