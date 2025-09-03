import './card-group.css'
import data from '../../data/data.json'
import Card from "../Card/Card"

export default function CardGroup({ filter }) {
  return (
    <section className="card-group">
      {data
        .filter((item) => {
          if (filter === "All") return true;
          if (filter === "Active") return item.isActive === true || item.isActive === "true";
          if (filter === "Inactive") return item.isActive === false || item.isActive === "false";
          return true;
        })
        .map((item) => (
          <Card
            key={item.id} 
            name={item.name}
            description={item.description}
            logo={item.logo}
            isActive={item.isActive}
          />
        ))}
    </section>
  );
}