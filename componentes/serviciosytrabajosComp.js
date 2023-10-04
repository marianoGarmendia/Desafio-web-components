const serviciosytrabajosContent = (el, titulo, img, descripcion) => {
  const card = document.createElement("div");
  card.innerHTML = `
      <article class="card-servicios-trabajos">
            <div class="card-servicios-trabajos__img-container">
              <img
                src="${img}"
                alt=""
                class="card-servicios-trabajos__img"
              />
            </div>
            <h2 class="card-servicios-trabajos__title">${titulo}</h2>
            <p class="card-servicios-trabajos__descripcion">
              ${descripcion}
            </p>
            <span class="ver-mas">Ver mas >></span>
      <span class="ver-menos"><< Ver menos</span>
          </article>
      
      
      `;
  el.appendChild(card);
  const verMenos = card.querySelector(".ver-menos");
  const verMas = card.querySelector(".ver-mas");
  const description = card.querySelector(
    ".card-servicios-trabajos__descripcion"
  );
  if (description.offsetHeight > 89) {
    verMas.style.display = "inherit";
    verMas.style.cursor = "pointer";
    verMas.addEventListener("click", (e) => {
      const cardEl = e.target.parentNode;
      cardEl.style.height = "auto";
      verMenos.style.display = "inherit";
      // cardEl.querySelector(".ver-menos").style.display = "inherit";
      verMas.style.display = "none";
    });

    // card.querySelector(".card-servicios-trabajos").style.height = "auto";
  }

  verMenos.style.cursor = "pointer";
  verMenos.addEventListener("click", (e) => {
    const cardEl = e.target.parentNode;
    cardEl.style.height = "415px";
    verMenos.style.display = "none";
    verMas.style.display = "inherit";
  });
};
