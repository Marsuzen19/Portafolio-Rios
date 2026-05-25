import { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
// Estado para controlar el menú hamburguesa en móviles
const [isOpen, setIsOpen] = useState(false);
return (
<nav className="navbar">
{/* Sección del Logo */}
    <div className="navbar-logo">
    <span className="text-cyan">Josue</span> Rios
    </div>
    {/* Enlaces de Navegación */}
    <div className={`navbar-links ${isOpen ? "open" : ""}`}>

        {/* Al hacer clic en un enlace en móvil, cerramos el menú */}
        <a href="#Inicio" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#perfil" onClick={() => setIsOpen(false)}>Perfil</a>
        <a href="#habilidades" onClick={() => setIsOpen(false)}>Habilidades</a>
        <a href="#certificados" onClick={() => setIsOpen(false)}>Certificados</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
        <a href="#contactos" onClick={() => setIsOpen(false)}>Contactos</a>

    </div>
    {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
    <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
</nav>
);
};
export default Navbar;