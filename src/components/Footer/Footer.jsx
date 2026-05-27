import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* NOMBRE */}
        <h2 className="footer-logo">
          Josue <span>Rios</span>
        </h2>

        {/* REDES (puedes cambiar links luego) */}
        <div className="footer-redes">
          <a href="https://github.com/Marsuzen19" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/josue-rios-b32884407/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Josue Rios — Todos los derechos reservados
        </p>

      </div>

    </footer>
  );
};

export default Footer;