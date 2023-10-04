function main() {
  const formContainer = document.querySelector(".form-container");
  const headerContainer = document.querySelector(".header-container");
  const footerContainer = document.querySelector(".footer-container");

  fetch(
    "https://cdn.contentful.com/spaces/k9j2sdo2aeeq/environments/master/entries?access_token=8Mme-T5pIEDcFG_FUxpmvAcB8FQSGZolK2H3ZKbfS-0"
  ).then((res) => {
    res.json().then((data) => {
      console.log(data);
      data.includes.Asset.map((asset) => {
        if (asset.fields.title.includes("logo-header")) {
          const imagenHeader = asset.fields.file.url;

          headerComponent(headerContainer, imagenHeader, "contacto");
        }
      });
    });
  });
  // headerComponent(headerContainer);
  contactoComponent(formContainer);
  footerComp(footerContainer);
}
main();
