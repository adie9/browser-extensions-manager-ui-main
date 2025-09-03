import './card-group.css'
import data from '../../data/data.json'
import Card from "../Card/Card"

export default function CardGroup({filter}) {
    return (
        <>
            <section className="card-group">
                {data.filter(item => {
                    if (filter === "All") return true;
                    if (filter === "Active") return item.isActive;
                    if (filter === "Inactive") return !item.isActive;
                    return true;
                }).map(data => (
                    <Card name={data.name} description={data.description} logo={data.logo} isActive={data.isActive} />
                ))}
            </section>
        </>
    )
}