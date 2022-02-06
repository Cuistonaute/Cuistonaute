import { NavLink } from "react-router-dom"
import Logo from "./Logo"
type NavBarProps = {
    isLoggedIn: boolean
}

const link = [
    {
        linkName: 'recette',
        linkPath: '/Recettes',
        linkTitle: 'Recettes'
    },
    {
        linkName: 'ingredient',
        linkPath: '/Ingredients',
        linkTitle: 'Ingrédients'
    },    {
        linkName: 'theme',
        linkPath: '/Themes',
        linkTitle: 'Thèmes'
    },    {
        linkName: 'astuce',
        linkPath: '/Astuces',
        linkTitle: 'Astuces'
    },
    {
        linkName: 'proposer',
        linkPath: '/Proposer',
        linkTitle: 'Proposer sa recette'
    },
]

const NavBar = (props: NavBarProps) =>{
    return(
        <nav className="nav">
            <Logo src="./logo-couleur.png" alt="logo-couleur"/>

            {link.map(item =>(<NavLink className={item.linkName} key={item.linkName} to={item.linkPath}><p>{item.linkTitle}</p></NavLink>))}
            
            <NavLink className="favoris" to="/Favoris">
                <i className="favori-icone fas fa-2x fa-heart"></i>
                <p className="favori-text">Favoris</p>                
            </NavLink>
            {props.isLoggedIn?
                <>
                    <img src="./logo192.png" alt="test avatar" />
                    <p>Pseudo</p>
                </>:
                <NavLink className="navbar-connexion" to="/Connexion">
                    <i className="connexion-icone fas fa-2x fa-user"></i>
                    <p className="connexion-texte">Connexion</p>
                </NavLink>
            }
        </nav>
    )
}

export default NavBar;