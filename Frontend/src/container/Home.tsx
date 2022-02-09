import CardImage from "../components/CardImage";

const Home = () => {

    return (
        <>
            <h1>Bienvenue sur Cuistonaute</h1>
            <section className="card1">
                <CardImage />
                <CardImage />
                <CardImage />
                <CardImage />
            </section>
            <section className="card2">
                <CardImage />
                <CardImage />
                <CardImage />
                <CardImage />
            </section>
            <section className="card3">
                <CardImage />
                <CardImage />
                <CardImage />
                <CardImage />
            </section>
        </>
    );
}

export default Home;