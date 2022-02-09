
import NavBar  from "./NavBar"
import SearchBar from "./SearchBar";
const Header = () =>{
    return(
        <>
            <NavBar isLoggedIn={false}/>
            <SearchBar />
        </>
    )
}

export default Header;