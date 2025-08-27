import './card-group.css'
import data from '../../data/data.json'
import Card from "../Card/Card"

export default function CardGroup() {
    return (
        <>
            <section className="card-group">
                {data.map(data => (
                    <Card name={data.name} description={data.description} />
                ))}
            </section>
        </>
    )
}