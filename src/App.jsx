import { useState, useEffect } from 'react'
import './App.css'
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import CardGroup from "./components/CardGroup/CardGroup"
import data from "./data/data.json";

function App() {
  const [filter, setFilter] = useState("All");
  const [cards, setCards] = useState(data);
  const [theme, setTheme] = useState("light");

  // UseEffect
  useEffect(() => {
  const root = document.getElementById('root');
  if (root) {
    root.classList.remove('light-gradient', 'dark-gradient');
    root.classList.add(`${theme}-gradient`);
  }
  }, [theme]);

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

  // Handle theme change
  function handleThemeChange() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <div className={`app-container ${theme}`}>
        <Header theme={theme} handleThemeChange={handleThemeChange} /> 
        <div className='ext-list-container'>
          <h1>Extensions List</h1>
          <div className='btn-group'>
            <Button className="main-btn" id="All" label="All" active={filter === "All"} onClick={(id) => setFilter(id)} />
            <Button className="main-btn" id="Active" label="Active" active={filter === "Active"} onClick={(id) => setFilter(id)} />
            <Button className="main-btn" id="Inactive" label="Inactive" active={filter === "Inactive"} onClick={(id) => setFilter(id)} />
          </div>
        </div>
          
        <CardGroup cards={cards} filter={filter} toggleCardActive={toggleCardActive} removeCard={removeCard} />
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/adie9">Adrian Guerra</a>.
        </div>
      </div>

      

    </>
  )
}

export default App
