import './Habilidades.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaJsSquare,
  FaLaravel,
  FaReact,
  FaDatabase,
  FaServer,
  FaCode
} from "react-icons/fa";

const Habilidades = () => {

  /* =========================================
  FRONTEND
  ========================================= */

  const frontendSkills = [
    {
      id: 1,
      titulo: "HTML5",
      descripcion: "Estructuración moderna de páginas web.",
      nivel: "Intermedio",
      icono: <FaHtml5 />
    },
    {
      id: 2,
      titulo: "CSS3",
      descripcion: "Diseño responsive y estilos modernos.",
      nivel: "Intermedio",
      icono: <FaCss3Alt />
    },
    {
      id: 3,
      titulo: "Bootstrap",
      descripcion: "Framework CSS para interfaces responsivas.",
      nivel: "Intermedio",
      icono: <FaBootstrap />
    },
    {
      id: 4,
      titulo: "JavaScript",
      descripcion: "Interactividad y lógica del frontend.",
      nivel: "Intermedio",
      icono: <FaJsSquare />
    },
    {
      id: 5,
      titulo: "React",
      descripcion: "Creación de interfaces modernas por componentes.",
      nivel: "Aprendizaje Activo",
      icono: <FaReact />
    }
  ];

  /* =========================================
  BACKEND
  ========================================= */

  const backendSkills = [
    {
      id: 6,
      titulo: "PHP",
      descripcion: "Desarrollo de aplicaciones web dinámicas.",
      nivel: "Intermedio",
      icono: <FaPhp />
    },
    {
      id: 7,
      titulo: "Laravel",
      descripcion: "Framework backend para aplicaciones modernas.",
      nivel: "Aprendizaje Activo",
      icono: <FaLaravel />
    }
  ];

  /* =========================================
  BASE DE DATOS Y HERRAMIENTAS
  ========================================= */

  const toolsSkills = [
    {
      id: 8,
      titulo: "HeidiSQL",
      descripcion: "Administración y consultas de bases de datos.",
      nivel: "Intermedio",
      icono: <FaDatabase />
    },
    {
      id: 9,
      titulo: "Bases de Datos",
      descripcion: "Manejo de MySQL y consultas SQL.",
      nivel: "Intermedio",
      icono: <FaServer />
    },
    {
      id: 10,
      titulo: "Lógica de Programación",
      descripcion: "Resolución de problemas y desarrollo web.",
      nivel: "Intermedio",
      icono: <FaCode />
    }
  ];

  /* =========================================
  COMPONENTE REUTILIZABLE
  ========================================= */

  const renderSkills = (titulo, skills) => (
    <div className="skills-category">

      <h2 className="category-title">
        {titulo}
      </h2>

      <div className="habilidades-grid">

        {skills.map((skill) => (

          <div key={skill.id} className="skill-card">

            {/* HEADER */}

            <div className="skill-header">

              <div className="skill-icon">
                {skill.icono}
              </div>

            </div>

            {/* BODY */}

            <div className="skill-body">

              <h3 className="skill-title">
                {skill.titulo}
              </h3>

              <p className="skill-desc">
                {skill.descripcion}
              </p>

              <span className="skill-level">
                {skill.nivel}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

  return (

    <section id="habilidades" className="habilidades-section">

      <div className="habilidades-container">

        <h1 className="main-title">
          Mis Habilidades
        </h1>

        {renderSkills("Frontend", frontendSkills)}

        {renderSkills("Backend", backendSkills)}

        {renderSkills("Bases de Datos & Herramientas", toolsSkills)}

      </div>

    </section>

  );
};

export default Habilidades;