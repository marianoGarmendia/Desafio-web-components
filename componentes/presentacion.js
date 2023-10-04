function presentacionComponent(el, [titulo, descripcion, imgPresentacion]) {
  const componentPres = document.createElement("div");
  componentPres.innerHTML = `
    <section class="section-presentacion">
    <div class="presentacion-container-info-img">
      <div class="presentacion-info">
        <h2 class="presentacion-titulo">${titulo}</h2>
        <p class="presentacion-texto">
          ${descripcion}
        </p>
      </div>
      <div class="presentacion-img-container">
        <img src="${imgPresentacion}" alt="" class="presentacion-imagen" />
      </div>
    </div>
    `;

  el.appendChild(componentPres);
}
