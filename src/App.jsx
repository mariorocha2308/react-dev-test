import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<> <Menu/> <Form/></>} />
      </Routes>
    </div>
  )
}

export default App
