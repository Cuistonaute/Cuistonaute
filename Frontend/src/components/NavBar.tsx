import Logo from "./Logo"
type NavBarProps = {
    isLoggedIn: boolean
}


const NavBar = (props: NavBarProps) =>{
    return(
        <nav className="nav">
            <Logo src="./logo-couleur.png" alt="logo-couleur"/>
            <a href="/Recettes">Recettes</a>
            <a href="/Ingredients">Ingrédients</a>
            <a href="/Themes">Thèmes</a>
            <a href="/Astuces">Astuces</a>
            <a href="/Proposer-sa-recette">Proposer sa recette</a>
            <a href="/Favoris">
                <i className="fas fa-heart">Favoris</i>                
            </a>
            {props.isLoggedIn?
                <>
                    <img src="./logo192.png" alt="test avatar" />
                    <p>Pseudo</p>
                </>:
                <a href="/Connexion">Connexion</a>
            }
        </nav>
    )
}

export default NavBar;