import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import CardGroup from "./components/CardGroup/CardGroup"

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <div className='app-container'>
        <Header /> 
        <div className='ext-list-container'>
          <h1>Extensions List</h1>
          <div className='btn-group'>
            <Button label="All" active={filter === "All"} onClick={() => setFilter("All")} />
            <Button label="Active" active={filter === "Active"} onClick={() => setFilter("Active")} />
            <Button label="Inactive" active={filter === "Inactive"} onClick={() => setFilter("Inactive")} />
          </div>
        </div>
          
        <CardGroup filter={filter} />
      </div>
    </>
  )
}

export default App
