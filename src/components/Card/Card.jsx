import './card.css'
import Button from "../Button/Button"

export default function Card({name, description, logo}) {
    return (
        <>
            <section class="card">
                <div class="card-desc">
                    <img src={logo} alt={`${name} logo`}></img>
                    <div>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>

                <div className='remove-toggle-container'>
                    <Button label="Remove" />
                    <p>Tog</p>
                </div>
            </section>
        </>
    )
}