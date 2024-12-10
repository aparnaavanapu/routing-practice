import './index.css'
import {Link } from 'react-router-dom'

const Header=()=>{
    return(
        <nav className="nav-bar">
            <div className="logo-container">
                <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave" className="logo"  />
                <h1 className="heading">Wave</h1>
            </div>
            <ul className="list-container">
                <li>
                    <Link to="/"  className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/about"  className="nav-link" >About</Link>
                </li>
                <li>
                    <Link to="/contact"  className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header