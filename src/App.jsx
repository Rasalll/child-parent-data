import { useState } from 'react'
import './App.css'
import Child from './Components/Child'
import Parent from './Components/Parent'
import { Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Parent/>}/>
      <Route path='/' element={<Child/>}/>

    </Routes>
      </>
  )
}

export default App
