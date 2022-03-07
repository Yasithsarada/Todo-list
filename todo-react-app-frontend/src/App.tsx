import { useState } from 'react'
import './App.css'
import AddToDo from './create-todo/AddToDo'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ViewToDo from './view-todo/ViewToDo'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='all'>
     <BrowserRouter>
    <Header/> 
     <Routes>
    <Route path ="/" element={<ViewToDo/>} />
    <Route path = "/addTo-Do" element = { <AddToDo/>} />

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
