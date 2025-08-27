import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header /> 
      <div className='ext-list-container'>
        <h1>Extensions List</h1>
        <div className='btn-group'>
          <Button label="All" />
          <Button label="Active" />
          <Button label="Inactive" />
        </div>
      </div>
    </>
  )
}

export default App
