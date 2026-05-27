import "./Contactos.css";

const Contactos = () => {
  return (
    <section id="contactos" className="contacto">
      <h2 className="contacto-titulo">Trabajemos Juntos</h2>

      <div className="contacto-container">

        {/* IZQUIERDA */}
        <div className="contacto-info">
          <h3>Ponte en Contacto</h3>

          <p>
            ¿Tienes un proyecto en mente o necesitas ayuda para automatizar tus
            flujos de trabajo? Me encantaría escucharte.
          </p>

          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>josueriosc@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h4>Ubicación</h4>
              <p>Lima - Perú</p>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <form className="contacto-form">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Cuéntame sobre tu proyecto..."></textarea>
          </div>

          <button type="submit" className="btn-enviar">
            Enviar Mensaje
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contactos;