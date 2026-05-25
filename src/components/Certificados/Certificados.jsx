import './Certificados.css';

import redesPDF from '../../assets/certificados/redes.pdf';
import cienciaDatosPDF from '../../assets/certificados/cienciadatos.pdf';
import concienciaDigitalPDF from '../../assets/certificados/concienciadigital.pdf';

const certificados = [

  {
    id: 1,
    nombre: "Redes",
    descripcion: "Fundamentos y conceptos básicos de redes.",
    archivo: redesPDF
  },

  {
    id: 2,
    nombre: "Ciencia de Datos",
    descripcion: "Introducción al análisis y procesamiento de datos.",
    archivo: cienciaDatosPDF
  },

  {
    id: 3,
    nombre: "Conciencia Digital",
    descripcion: "Buenas prácticas y ciudadanía digital.",
    archivo: concienciaDigitalPDF
  }

];

const Certificados = () => {

  return (

    <section id="certificados" className="certificados-section">

      <div className="certificados-container">

        {/* HEADER */}

        <div className="section-header">

          <span className="section-subtitle">
            CERTIFICADOS
          </span>

          <h1 className="main-title">
            Mis Certificaciones
          </h1>

          <p className="section-description">
            Certificados obtenidos durante mi formación
            académica y aprendizaje en tecnologías.
          </p>

        </div>

        {/* GRID */}

        <div className="certificados-grid">

          {certificados.map((certificado) => (

            <div
              key={certificado.id}
              className="certificado-card"
            >

              {/* ICONO PDF */}

              <div className="pdf-icon">
                📄
              </div>

              {/* TEXTO */}

              <h3 className="certificado-title">
                {certificado.nombre}
              </h3>

              <p className="certificado-description">
                {certificado.descripcion}
              </p>

              {/* BOTONES */}

              <div className="certificado-buttons">

                <a
                  href={certificado.archivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-certificado btn-view"
                >
                  Ver PDF
                </a>

                <a
                  href={certificado.archivo}
                  download
                  className="btn-certificado btn-download"
                >
                  Descargar
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default Certificados;