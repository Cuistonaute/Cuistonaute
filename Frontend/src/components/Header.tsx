
import NavBar  from "./NavBar"
import SearchBar from "./SearchBar";
const Header = () =>{
    return(
        <>
            <NavBar isLoggedIn={false}/>
            <SearchBar 
                value='' 
                handleChange={(event) => console.log(event.target.value)}
            />
        </>
    )
}

export default Header;