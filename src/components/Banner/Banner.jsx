//inicio
import './Banner.css';
import miFoto from '../../assets/perfilFoto.JPG';
const Banner = () => {
return (
<section id ="Inicio" className="hero-section">
    <div className="hero-content">
    {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
        <span className="status-dot"></span>
        Disponible para nuevos proyectos
        </div>
        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
        {/* Reemplazar src con {miFoto} cuando importen su imagen local

        */}

        <img
        src={miFoto}
        alt="Foto de Perfil"
        className="profile-photo"
        />
        </div>
        {/* 3. Título Principal */}
        <h1 className="hero-title">
        Josue <br />
        <span className="text-cyan">Rios</span>
        </h1>
        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">

        Estudiante de SENATI de tercer ciclo
        
        </h2>
        {/* 5. Descripción */}
        <p className="hero-description">
            Estudiante de Informática y Desarrollo de Aplicaciones Web
            con enfoque en frontend y backend.

            Desarrollo aplicaciones modernas y funcionales utilizando
            React, Laravel, PHP y JavaScript, creando soluciones
            eficientes orientadas a la experiencia del usuario.
        </p>
        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">Ver

            Proyectos</a>

            <a href="#contacto" className="btn btn-
            secondary">Contáctame</a>

        </div>
    </div>
    {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
    <div className="scroll-indicator">
    ↓
    </div>
</section>
);
};
export default Banner;