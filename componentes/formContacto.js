function contactoComponent(el) {
  const contactComponentEl = document.createElement("div");
  contactComponentEl.innerHTML = `
     
  <h2 class="contacto-titulo">Escribime</h2>
      <form class="form-contacto">

        <div class="form-grupo campo-nombre">
          <label class="label-contacto">Nombre</label>
          <input
            type="text"
            class="input-contacto"
            name="nombre"
            id=""
            placeholder="Tu nombre"
          />
        </div>
        <div class="form-grupo campo-email">
          <label for="email" class="label-contacto">Email</label>
          <input
            type="email"
            placeholder="tu@mail.com"
            name="email"
            class="input-contacto"
          />
        </div>
        <div class="form-grupo campo-mensaje">
          <label for="mensaje" class="label-contacto">Mensaje</label>
          <textarea
            name="mensaje"
            class="input-contacto"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="button-container">
          <button class="boton-contacto">
            Enviar <img src="img/send.png" alt="" />
          </button>
          </div>
          <div class="mensaje-exitoso">Su mensaje fue enviado correctamente</div>
      </form>
   
      `;
  el.appendChild(contactComponentEl);

  // const success = () => {
  //   const mensajeExitoso = contactComponentEl.querySelector(".mensaje-exitoso");
  //   mensajeExitoso.style.display = "inherit";
  //   setTimeout(() => {
  //     mensajeExitoso.style.display = "none";
  //   }, 2000);
  // };

  contactComponentEl
    .querySelector(".form-contacto")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      console.log(formData);
      const data = formData.entries();
      const datos = Object.fromEntries(data);

      e.target.reset();

      const jsonEnviar = JSON.stringify({
        to: "marianogarmendia77@gmail.com",
        message: "mensaje de prueba",
      });
      console.log(jsonEnviar);

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonEnviar,
      })
        .then((response) => {
          console.log(response.ok);
          if (!response.ok) {
            throw new Error("Hubo un problema con la peticion");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("Error", err);
        });

      // Funcion para mostrar y borrar el mensaje de exito del envio de datos del form
      // success();
    });
}
