import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import CardGroup from "./components/CardGroup/CardGroup"
import data from "./data/data.json";

function App() {
  const [filter, setFilter] = useState("All");
  const [cards, setCards] = useState(data);

  // Toggle isActive state of a card
  function toggleCardActive(id) {
    setCards((prev) => 
    prev.map((card) => 
    card.id === id ? { ...card, isActive: !card.isActive } : card));
  }

  // Remove card by ID
  function removeCard(id) {
    setCards((prev) => prev.filter((card) => card.id != id));
  }

  return (
    <>
      <div className='app-container'>
        <Header /> 
        <div className='ext-list-container'>
          <h1>Extensions List</h1>
          <div className='btn-group'>
            <Button id="All" label="All" active={filter === "All"} onClick={(id) => setFilter(id)} />
            <Button id="Active" label="Active" active={filter === "Active"} onClick={(id) => setFilter(id)} />
            <Button id="Inactive" label="Inactive" active={filter === "Inactive"} onClick={(id) => setFilter(id)} />
          </div>
        </div>
          
        <CardGroup cards={cards} filter={filter} toggleCardActive={toggleCardActive} removeCard={removeCard} />
      </div>
    </>
  )
}

export default App
