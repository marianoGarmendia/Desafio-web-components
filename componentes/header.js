function headerComponent(el, imgHome, page) {
  const component = document.createElement("div");
  component.innerHTML = `
    <header class="header">
   
      <div class="logo-container">
      <a href="index.html">
      
      <img
        class="img-logo"
        src="${imgHome}
              "
        alt=""
        
      />
      </a>
      </div>
      <div class="menu-hamburguesa">
         <img class="abre-ventana" src="/img/menu-svgrepo-com 1 (1).png" alt="" />
     </div>
      <div class="header__menu">
        <div class="header__menu-items">
          <a href="./portfolio.html" class="header__menu-items__enlaces" id="enlace-portfolio"
            >Portfolio</a
          >
        </div>
        <div class="header__menu-items">
          <a href="./servicios.html" class="header__menu-items__enlaces" id="enlace-servicio"
            >Servicios</a
          >
        </div>
        <div class="header__menu-items">
          <a href="./contacto.html" class="header__menu-items__enlaces" id="enlace-contacto"
            >Contacto</a
          >
        </div>
      </div>
    </header>
    <div class="menu-flotante">
    <div class="cierra-ventana">
        <img class="img-close" src="/img/close-svgrepo-com (1) 1.png" alt="" />
    </div>
    <div class="menu-flotante__enlace-container">
        <a href="/index.html" class="menu-flotante__enlace" id="enlace-home">Home</a>
    </div>

    <div class="menu-flotante__enlace-container">
        <a href="/portfolio.html" class="menu-flotante__enlace"  id="enlace-portfolio" >Portfolio</a>
    </div>
    <div class="menu-flotante__enlace-container">
        <a href="/servicios.html" class="menu-flotante__enlace" id="enlace-servicios" >Servicios</a>
    </div><div class="menu-flotante__enlace-container">
        <a href="/contacto.html" class="menu-flotante__enlace" id="enlace-contacto">Contacto</a>
    </div>
</div>
    
    `;
  el.appendChild(component);

  const menuBurguerEl = document.querySelector(".menu-hamburguesa");
  const menuFlotante = document.querySelector(".menu-flotante");
  const cierraVentana = document.querySelector(".cierra-ventana");

  if (page == "home") {
    menuFlotante.querySelector("#enlace-home").style.display = "none";
  } else if (page == "servicios") {
    menuFlotante.querySelector("#enlace-servicios").style.display = "none";
  } else if (page == "portfolio") {
    menuFlotante.querySelector("#enlace-portfolio").style.display = "none";
  } else if (page == "contacto") {
    menuFlotante.querySelector("#enlace-contacto").style.display = "none";
  }

  menuBurguerEl.addEventListener("click", (e) => {
    menuFlotante.classList.remove("desaparecer");
    menuFlotante.style.display = "flex";
  });

  cierraVentana.addEventListener("click", () => {
    menuFlotante.classList.add("desaparecer");
  });
  //   console.log(data);
}
