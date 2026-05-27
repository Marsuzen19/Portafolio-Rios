import "./Servicios.css";

const servicios = [
  {
    id: 1,
    titulo: "Desarrollo Web Full Stack",
    descripcion:
      "Desarrollo aplicaciones web modernas utilizando React, Laravel, PHP y JavaScript, enfocadas en rendimiento y funcionalidad.",
    icono: "💻"
  },
  {
    id: 2,
    titulo: "Soluciones UI/UX",
    descripcion:
      "Diseño interfaces intuitivas y atractivas, priorizando la experiencia del usuario y la usabilidad en cada proyecto.",
    icono: "🎨"
  }
];

const Servicios = () => {
  return (
    <section id="servicios" className="servicios">
      <h2 className="servicios-titulo">Servicios</h2>

      <p className="servicios-intro">
        Estudiante de Informática y Desarrollo de Aplicaciones Web con enfoque en frontend y backend.
      </p>

      <div className="servicios-container">
        {servicios.map((servicio) => (
          <div className="servicio-card" key={servicio.id}>
            <div className="icono">{servicio.icono}</div>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;