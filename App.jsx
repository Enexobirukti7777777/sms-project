import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import Header from './Header'
function App() {

  return (
    
      <div className='grid-container'>
        <Header/>
        <Sidebar/>

        <Home/>

        </div>
    
  )
}

export default App
