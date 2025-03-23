import { Link } from "react-router-dom";
import "./Navbar_3.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/rooms">Quartos</Link>
    </nav>
  );
}
