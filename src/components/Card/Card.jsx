import './card.css'
import Button from "../Button/Button"
import Switch from "../Switch/Switch"
import { useState } from 'react'

export default function Card({ name, description, logo, isActive, onToggle }) {
  return (
    <section className='card'>
      <div className='card-desc'>
        <img className='logo' src={logo} alt={`${name} logo`} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='remove-toggle-container'>
        <Button label="Remove" />
        <Switch active={isActive} setActive={onToggle} />
      </div>
    </section>
  );
}
