import './card.css'

export default function Card({name, description}) {
    return (
        <>
            <section class="card">
                <h1>{name}</h1>
                <p>{description}</p>
            </section>
        </>
    )
}