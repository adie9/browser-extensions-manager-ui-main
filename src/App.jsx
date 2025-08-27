import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button"

function App() {

  return (
    <>
      <div>
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
