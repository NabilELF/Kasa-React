import { NavLink } from "react-router-dom"
import logo from "../images/logo.png"
import "../styles/Header.scss"

function Header () {
    return (
        <header>
            <img src={logo} alt="logo du site" />
            <nav className = "nav">
                <NavLink to ="/" className="nav-link">Accueil</NavLink>
                <NavLink to ="/about" className="nav-link">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;