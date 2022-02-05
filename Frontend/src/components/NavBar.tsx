import Logo from "./Logo"
type NavBarProps = {
    isLoggedIn: boolean
}


const NavBar = (props: NavBarProps) =>{
    return(
        <nav className="nav">
            <Logo src="./logo-couleur.png" alt="logo-couleur"/>
            <a className="recette" href="/Recettes">Recettes</a>
            <a className="ingredient" href="/Ingredients">Ingrédients</a>
            <a className="theme" href="/Themes">Thèmes</a>
            <a className="astuce" href="/Astuces">Astuces</a>
            <a className="proposer" href="/Proposer-sa-recette">Proposer sa recette</a>
            <a className="favoris" href="/Favoris">
                <i className="favori-icone fas fa-2x fa-heart"></i>
                <p className="favori-text">Favoris</p>                
            </a>
            {props.isLoggedIn?
                <>
                    <img src="./logo192.png" alt="test avatar" />
                    <p>Pseudo</p>
                </>:
                <a className="connexion" href="/Connexion">Connexion</a>
            }
        </nav>
    )
}

export default NavBar;