import React from "react"

type SearchBarProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchBar = (props: SearchBarProps) => {
    return(
        <>
            <input type="text" value={props.value} onChange={props.handleChange} />
            <button>Rechercher</button>
        </>
    )
}

export default SearchBar