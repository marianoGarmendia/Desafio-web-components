function main() {
  let headerContainer = document.querySelector(".header-container");
  let homeContainer = document.querySelector(".home-container");
  let presentacionContainer = document.querySelector(".presentacion-container");
  let serviciosContainer = document.querySelector(
    ".servicios-trabajos-container"
  );
  let formContainer = document.querySelector(".form-container");
  let footerContainer = document.querySelector(".footer-template");

  // Me trae todo el contenido del espacio
  fetch(
    "https://cdn.contentful.com/spaces/k9j2sdo2aeeq/environments/master/entries?access_token=8Mme-T5pIEDcFG_FUxpmvAcB8FQSGZolK2H3ZKbfS-0"
  ).then((res) => {
    res.json().then((data) => {
      // console.log(data);
      data.includes.Asset.map((asset) => {
        if (asset.fields.title.includes("logo-header")) {
          const imagenHeader = asset.fields.file.url;
          headerComponent(headerContainer, imagenHeader, "home");

          const imgBienvenida = data.includes.Asset[6].fields.file.url;
          homeComponent(
            homeContainer,
            imgBienvenida,

            "bienvenida"
          );
          // Presentacion
        }
      });
      const presentacionDescription = data.includes.Asset[9].fields.description;
      const titlePresentacion = data.includes.Asset[9].fields.title;
      const imgPresentacion = data.includes.Asset[9].fields.file.url;

      presentacionComponent(presentacionContainer, [
        titlePresentacion,
        presentacionDescription,
        imgPresentacion,
      ]);

      data.includes.Asset.map((asset) => {
        // console.log(asset);
        if (asset.metadata.tags.length > 0) {
          if (asset.metadata.tags[0].sys.id.includes("servicio")) {
            // console.log(asset);
            const descripcion = asset.fields.description;
            const img = asset.fields.file.url;
            const titulo = asset.fields.title;

            serviciosytrabajosContent(
              serviciosContainer,
              titulo,
              img,
              descripcion
            );
          }
        }
      });
      contactoComponent(formContainer);
      footerComp(footerContainer);
    });
  });
}
main();
