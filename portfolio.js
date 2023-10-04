// aca va una llamada al header y al homer para renderizar la presentacion
// const portfolioContent = (el, titulo, img, descripcion) => {
//   const card = document.createElement("div");
//   card.innerHTML = `
//     <article class="card-servicios-trabajos">
//           <div class="card-servicios-trabajos__img-container">
//             <img
//               src="${img}"
//               alt=""
//               class="card-servicios-trabajos__img"
//             />
//           </div>
//           <h2 class="card-servicios-trabajos__title">${titulo}</h2>
//           <p class="card-servicios-trabajos__descripcion">
//             ${descripcion}
//           </p>
//         </article>

//     `;
//   el.appendChild(card);
// };

function main() {
  const container = document.querySelector(".portfolio-portada");
  const cardContainer = document.querySelector(".servicios-trabajos-container");
  const footerContainer = document.querySelector(".footer-container");
  fetch(
    " https://cdn.contentful.com/spaces/k9j2sdo2aeeq/environments/master/entries?access_token=8Mme-T5pIEDcFG_FUxpmvAcB8FQSGZolK2H3ZKbfS-0"
  ).then((res) => {
    res.json().then((data) => {
      let header = false;
      let portfolio = false;
      let imagenHeader;
      let tituloPortfolio;
      let imgPortfolio;

      data.includes.Asset.map((asset) => {
        if (asset.fields.title.includes("logo-header")) {
          imagenHeader = asset.fields.file.url;

          header = true;
        }

        if (asset.fields.title.includes("portfolio")) {
          tituloPortfolio = data.items[0].fields.titulo;
          imgPortfolio = asset.fields.file.url;
          portfolio = true;
        }

        if (header && portfolio) {
          headerComponent(container, imagenHeader, "portfolio");
          homeComponent(container, imgPortfolio, "portfolio");
          header = false;
          portfolio = false;
        }
      });

      data.includes.Asset.map((asset) => {
        if (asset.metadata.tags.length > 0) {
          if (asset.metadata.tags[0].sys.id.includes("trabajos")) {
            const descripcion = asset.fields.description;
            const img = asset.fields.file.url;
            const titulo = asset.fields.title;

            serviciosytrabajosContent(cardContainer, titulo, img, descripcion);
          }
        }
      });
      footerComp(footerContainer);
    });
  });
}
main();
