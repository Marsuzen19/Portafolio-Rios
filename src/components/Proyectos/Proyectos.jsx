import "./Proyectos.css";

// IMPORTAR IMÁGENES
import sistemamatriculaweb from "../../assets/proyectos/sistemamatriculaweb.png";
import clinicap from "../../assets/proyectos/clinicap.png";
import matricula from "../../assets/proyectos/matricula.png";
import escuela from "../../assets/proyectos/escuela.png";
import login from "../../assets/proyectos/login.png";

const proyectos = [
  {
    id: 1,
    nombre: "Sistema de Ventas",
    descripcion: "Sistema web para gestionar ventas, clientes y productos.",
    imagen: sistemamatriculaweb,
    paginaWeb: "https://sistemagestion.infinityfreeapp.com/dashboard.html"
  },
  {
    id: 2,
    nombre: "Panel Administrativo de Clínica",
    descripcion: "Panel web para gestionar pacientes, citas y personal médico.",
    imagen: clinicap,
    github: "https://github.com/alonsoSaavedra-03/Clinica_Proyecto",
    paginaWeb: "https://saludvida.xo.je/"
  },
  {
    id: 3,
    nombre: "Sistema de Matrícula (Laravel)",
    descripcion: "Sistema backend para registro y control de matrículas.",
    imagen: matricula,
    github: "https://github.com/Marsuzen19/Activida6_sistemamatricula"
  },
  {
    id: 4,
    nombre: "Portal Académico",
    descripcion: "Aplicación web para gestionar estudiantes, cursos y notas.",
    imagen: escuela,
    github: "https://github.com/Marsuzen19/Proyecto_escuela_react"
  },
  {
    id: 5,
    nombre: "Sistema de Login",
    descripcion: "Módulo de autenticación con validación de usuarios.",
    imagen: login,
    github: "https://github.com/Marsuzen19/martes"
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos">
      <h2 className="proyectos-titulo">Mis Proyectos</h2>

      <div className="proyectos-container">
        {proyectos.map((proyecto) => (
          <div className="card" key={proyecto.id}>

            {/* IMAGEN */}
            {proyecto.imagen ? (
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="card-img"
              />
            ) : (
              <div className="card-img placeholder">Sin imagen</div>
            )}

            <div className="card-body">
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>

              <div className="botones">

                {/* PARA EL ID 2 QUE TIENE  DOS BOTONES */}
                {proyecto.id === 2 ? (
                  <>
                    {proyecto.paginaWeb && (
                      <a
                        href={proyecto.paginaWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Ver página web
                      </a>
                    )}

                    {proyecto.github && (
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github"
                      >
                        Ver en GitHub
                      </a>
                    )}
                  </>
                ) : (
                  /* PARA LOS DEMÁS SOLO UN BOTÓN */
                  proyecto.paginaWeb ? (
                    <a
                      href={proyecto.paginaWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      Ver página web
                    </a>
                  ) : (
                    proyecto.github && (
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github"
                      >
                        Ver en GitHub
                      </a>
                    )
                  )
                )}

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;













