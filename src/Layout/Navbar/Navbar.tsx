
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar= ()=> {
  const navigator = useNavigate();
  return (
    <nav className='navbar'>
        <div className="app-logo" onClick={()=>{navigator('/')}}>
            My Store
        </div>
    </nav>
  )
}

export default Navbar