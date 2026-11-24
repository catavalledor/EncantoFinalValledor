let contenedor = document.querySelector("#contenedor-cristales");

fetch("js/datos.json")
    .then(respuesta => respuesta.json())
    .then(cristales => {

        cristales.forEach(cristal => {

            contenedor.innerHTML += `
                <div class="col-12 col-md-6">

                    <div class="card h-100 border border-2">

                        <img
                            src="${cristal.imagen}"
                            class="card-img-top img-fluid imagen-cristal"
                            alt="${cristal.nombre}"
                        >

                        <div class="card-body">

                            <h3 class="card-title">
                                ${cristal.nombre}
                            </h3>

                            <p class="card-text">
                                <strong>Descripción:</strong>
                                ${cristal.descripcion}
                            </p>

                            <p class="card-text">
                                <strong>Intención:</strong>
                                ${cristal.intencion}
                            </p>

                            <p class="card-text">
                                <strong>Ritual:</strong>
                                ${cristal.ritual}
                            </p>

                        </div>

                    </div>

                </div>
            `;

        });

    });