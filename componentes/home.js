function homeComponent(el, img, req) {
  const component = document.createElement("div");

  if (req === "portfolio") {
    component.innerHTML = `
    <section class="home">
      <div class="home__title-container">
        <div class="home__title">
          <p class="texto-saludo">Mis</p>
          <p class="texto-saludo texto-celeste">Trabajos</p>
        </div>
      </div>
      <div class="home__image-container">
        <img src="${img}" alt="" class="home__image" />
      </div>
    </section>`;

    el.appendChild(component);
  } else if (req === "bienvenida") {
    component.innerHTML = `
    <section class="home">
    <div class="home__title-container">
      <div class="home__title">
        <p class="texto-saludo">Hola</p>
        <p class="texto-saludo texto-celeste">Soy Mariano</p>
      </div>
    </div>
    <div class="home__image-container">
      <img src="${img}" alt="" class="home__image" />
    </div>
  </section>`;

    el.appendChild(component);
  }

  if (req === "servicios") {
    component.innerHTML = `
    <section class="home">
    <div class="home__title-container">
      <div class="home__title">
        <p class="texto-saludo">Mis</p>
        <p class="texto-saludo texto-celeste">Servicios</p>
      </div>
    </div>
    <div class="home__image-container">
      <img
        src="${img}"
        alt=""
        class="home__image"
      />
    </div>
  </section>
    `;
    el.appendChild(component);
  }
}
