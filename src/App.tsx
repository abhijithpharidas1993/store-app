import './App.css'
import Navbar from './Layout/Navbar/Navbar';
import {
    Outlet,
  } from "react-router-dom"

 

function App() {
  

  return (
    <div className='app'>
        <Navbar />
        <div className="app-content">
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default App
