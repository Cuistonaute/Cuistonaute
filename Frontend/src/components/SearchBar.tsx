import React, {useState} from "react"
import Button from "./Button"

const SearchBar = () => {
    const [searchTerme, setSearchTerme] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerme(event.currentTarget.value)
    }
    return(
        <form className="search">
            <input className="search-input" type="text" value={searchTerme} onChange={handleChange} placeholder="Chercher votre recette ou ingrédients..."/>
            <Button handleClick={(event) => {console.log('Button Clicked!', event)}} name='Rechercher' />
        </form>
    )
}

export default SearchBar