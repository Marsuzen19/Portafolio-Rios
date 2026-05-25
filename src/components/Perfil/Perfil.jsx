import './Perfil.css';

const Perfil = () => {
  return (
    <section id="perfil" className="sobre-mi-section">

      <div className="sobre-mi-container">

        <h2 className="section-title">Sobre mí</h2>

        <div className="sobre-mi-grid">

          {/* =====================================
          TARJETA 1: PERFIL PROFESIONAL
          ====================================== */}

          <div className="card">

            <div className="card-header">

              {/* Ícono */}
              <div className="icon-box">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>

                </svg>

              </div>

              <h3>Perfil profesional</h3>

            </div>

            <p className="card-text">

              Estudiante de Informática y Desarrollo de Aplicaciones Web,
              enfocado en el desarrollo frontend y backend.

              <br /><br />

              Experiencia trabajando con tecnologías como HTML, CSS,
              Bootstrap, JavaScript, PHP, Laravel y React,
              desarrollando interfaces modernas y aplicaciones funcionales.

              <br /><br />

              Interés en la creación de soluciones web eficientes,
              escalables y orientadas a mejorar la experiencia del usuario.

            </p>

          </div>

          {/* =====================================
          TARJETA 2: EDUCACIÓN
          ====================================== */}

          <div className="card">

            <div className="card-header">

              {/* Ícono Educación */}
              <div className="icon-box">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>

                </svg>

              </div>

              <h3>Educación</h3>

            </div>

            <div className="timeline">

              {/* Educación 1 */}

              <div className="timeline-item">

                <div className="timeline-header">

                  <h4>Informática y Desarrollo de Aplicaciones Web</h4>

                  <span className="badge badge-outline">
                    En curso
                  </span>

                </div>

                <span className="timeline-date">
                  SENATI
                </span>

              </div>

              {/* Educación 2 */}

              <div className="timeline-item">

                <div className="timeline-header">

                  <h4>React y Desarrollo Web</h4>

                  <span className="badge badge-outline">
                    Frontend
                  </span>

                </div>

                <span className="timeline-date">
                  Proyectos académicos
                </span>

              </div>

              {/* Educación 3 */}

              <div className="timeline-item">

                <div className="timeline-header">

                  <h4>Laravel y PHP</h4>

                  <span className="badge badge-outline">
                    Backend
                  </span>

                </div>

                <span className="timeline-date">
                  Desarrollo Web
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Perfil;