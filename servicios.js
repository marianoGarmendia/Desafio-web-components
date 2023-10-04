function main() {
  const cardContainer = document.querySelector(".servicios-trabajos-container");
  const indexContainer = document.querySelector(".home-servicios");
  const footerContainer = document.querySelector(".footer-container");
  fetch(
    "https://cdn.contentful.com/spaces/k9j2sdo2aeeq/environments/master/entries?access_token=8Mme-T5pIEDcFG_FUxpmvAcB8FQSGZolK2H3ZKbfS-0"
  ).then((res) => {
    res.json().then((data) => {
      console.log(data);
      data.includes.Asset.map((asset) => {
        if (asset.fields.title.includes("logo-header")) {
          const imagenHeader = asset.fields.file.url;

          headerComponent(indexContainer, imagenHeader, "servicios");
        }
      });
      const imgServicios = data.includes.Asset[1].fields.file.url;
      homeComponent(indexContainer, imgServicios, "servicios");
      //   serviciosContent(cardContainer, titulo, img, descripcion);

      // ACA ESTA LA TAG SERVICIO PARA IDENTIFICAR EL SERVICIO
      // includes.Asset[8].metadata.tags[0].sys.id
      //   data.includes.Asset[8].metadata.tags[0].sys.id;

      data.includes.Asset.map((asset) => {
        // console.log(asset);
        if (asset.metadata.tags.length > 0) {
          if (asset.metadata.tags[0].sys.id.includes("servicio")) {
            console.log(asset);
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
