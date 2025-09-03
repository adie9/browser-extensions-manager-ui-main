import './card.css'
import Button from "../Button/Button"
import Switch from "../Switch/Switch"

export default function Card({ key, name, description, logo, isActive, onToggle, onRemove }) {

  return (
    <section id={key} className='card'>
      <div className='card-desc'>
        <img className='logo' src={logo} alt={`${name} logo`} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='remove-toggle-container'>
        <Button label="Remove" onClick={onRemove} />
        <Switch active={isActive} setActive={onToggle} />
      </div>
    </section>
  );
}
