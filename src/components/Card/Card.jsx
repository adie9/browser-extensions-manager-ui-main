import './card.css'
import Button from "../Button/Button"
import Switch from "../Switch/Switch"
import { useState } from 'react'

export default function Card({name, description, logo, isActive}) {
    const [active, setActive] = useState(isActive); 

    return (
        <>
            <section className='card'>
                <div className='card-desc'>
                    <img className='logo' src={logo} alt={`${name} logo`}></img>
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>

                <div className='remove-toggle-container'>
                    <Button label="Remove" />
                    <Switch active={active} setActive={setActive} />
                </div>
            </section>
        </>
    )
}