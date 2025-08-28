import './card.css'
import Button from "../Button/Button"

export default function Card({name, description, logo}) {
    return (
        <>
            <section class="card">
                <div class="card-desc">
                    <img className='logo' src={logo} alt={`${name} logo`}></img>
                    <div>
                        <h2>{name}</h2>
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