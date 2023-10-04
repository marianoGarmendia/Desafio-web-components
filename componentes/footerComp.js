function footerComp(el) {
  const footerCont = document.createElement("div");
  footerCont.innerHTML = `
    <footer class="footer">
    <div class="footer-contenido">
      <div class="logo-container">
        <a href="index.html">
          <img class="img-logo" src="img/monkey_2407395.png" alt="" />
        </a>
      </div>
      <div class="enlaces-container">
        <div class="enlace-grupo">
          <img src="img/home.png" alt="" class="img-icono" />
          <a href="index.html" class="footer-enlace">Home</a>
        </div>
        <div class="enlace-grupo">
          <img src="img/user.png" alt="" class="img-icono" />
          <a href="servicios.html" class="footer-enlace">Servicios</a>
        </div>
        <div class="enlace-grupo">
          <img src="img/phone.png" alt="" class="img-icono" />
          <a href="contacto.html" class="footer-enlace">Contacto</a>
        </div>
      </div>
      <div class="footer-iconos-redes">
        <a href="https://www.linkedin.com/in/mariano-garmendia-dev/" target="_blank" >
          <div class="icono-redes-container-img linkedin">
            <img
              src="img/linkedin-svgrepo-com (1) 1.png"
              alt=""
              class="img-redes"
            />
          </div>
        </a>
        <a href="https://github.com/marianoGarmendia" target="_blank">
          <div class="icono-redes-container-img github">
            <img
              src="img/github-svgrepo-com 1.png"
              alt=""
              class="img-redes"
            />
          </div>
        </a>
        <a href="">
          <div class="icono-redes-container-img twitter">
            <img src="img/twitter (1).png" alt="" class="img-redes" />
          </div>
        </a>
      </div>
      <div class="footer-copy"><span>@2023 - https//marianodev.io</span></div>
    </div>
  </footer>
    `;

  el.appendChild(footerCont);
}
