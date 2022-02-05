import React from "react"

type SearchBarProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchBar = (props: SearchBarProps) => {
    return(
        <form className="search">
            <input className="search-input" type="text" value={props.value} onChange={props.handleChange} placeholder="Chercher votre recette ou ingrédients..."/>
            <button className="search-button">Rechercher</button>
        </form>
    )
}

export default SearchBar