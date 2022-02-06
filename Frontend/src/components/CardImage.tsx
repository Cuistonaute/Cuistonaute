const CardImage = () => {
    return(
        <>
            <article className="card">
                <img className="image-card" src="./logo-couleur.png" alt="" />
                <i className="favori-card fas fa-2x fa-heart"></i>
                <section className="text-card">
                    <a href="#">repas</a>
                </section>
            </article>
        </>
    )
}

export default CardImage;