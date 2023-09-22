import "./footer.css";
export const Footer = () => {
  return(
  <>
    <footer>
      <div className="footer-grid">
        <section className="footer-1">
          <h2>Candelabra</h2>
          <h4>
            Tenemos todo lo que necesitas y lo que necesitas, pero siempre
            soñaste, lo más cuite y funcional en papeleria, oficina y mucho más.
          </h4>
        </section>
        <section className="footer-2">
          <h2>Informacíon</h2>
          <p>
            <a href="#">Estado del pedido y pagos</a>
          </p>
          <p>
            <a href="#">Preguntas Frecuentes</a>
          </p>
          <p>
            <a href="#">Costos de Envío</a>
          </p>
          <p>
            <a href="#">Cambios y Devoluciones</a>
          </p>
          <p>
            <a href="#">Contáctanos</a>
          </p>
        </section>
        <section className="footer-3">
          <h2>Mi Cuenta</h2>
          <p>
            <a href="#">Regístrate</a>
          </p>
          <p>
            <a href="#">Inicio de sesión</a>
          </p>
          <p>
            <a href="#">Olvidaste tu contraseña</a>
          </p>
        </section>
        <section className="footer-4">
          <h2>Siguenos en Redes Sociales</h2>
          <a href="#">
            <img src="https://res.cloudinary.com/dxy1spfug/image/upload/v1694387699/icons/facebook_sbpenp.webp" />
          </a>
          <a href="#">
            <img src="https://res.cloudinary.com/dxy1spfug/image/upload/v1694387703/icons/instagram_xbbhbq.webp" />
          </a>
          <a href="#">
            <img src="https://res.cloudinary.com/dxy1spfug/image/upload/v1694387704/icons/twitter_thsoqe.webp" />
          </a>
        </section>
      </div>
    </footer>
    
  </>
  )
};
