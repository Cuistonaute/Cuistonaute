type LogoProps = {
    src: string
    alt: string
}

const Logo = (props: LogoProps) => {
    return(
        <a href="/">
            <img src={props.src} alt={props.alt} />
        </a>
    )
}

export default Logo