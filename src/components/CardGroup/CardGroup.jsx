import './card-group.css'
import Card from "../Card/Card"

export default function CardGroup({ cards, filter, toggleCardActive, removeCard }) {
  const filteredCards = cards.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Active") return item.isActive === true || item.isActive === "true";
    if (filter === "Inactive") return item.isActive === false || item.isActive === "false";
    return true;
  });

  return (
    <section className="card-group">
      {filteredCards.map((item) => (
        <Card
          key={item.id}
          {...item}
          onToggle={() => toggleCardActive(item.id)} 
          onRemove={() => removeCard(item.id)}
        />
      ))}
    </section>
  );
}