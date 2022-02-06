import React from "react"

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    name: string
}
const Button = (props: ButtonProps) => {
    return(
        <>
            <button className="button" onClick={props.handleClick}>{props.name}</button>
        </>
    )
}

export default Button