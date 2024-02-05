import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"
import "../styles/header.scss"

// Définition du composant Header qui représente l'en-tête de l'application
export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" className="logo" />
      <nav className="header-navigation">
        <NavLink
          to="/Kasa"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
