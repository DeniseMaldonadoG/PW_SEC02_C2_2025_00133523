function cambiarTitulo() {
    document.getElementById("titulo").innerHTML = "<em><strong>HTML & CSS: Curso práctico avanzado</strong></em>";
}

function cambiarColores() {
    var columnas = document.querySelectorAll(".columna1, .columna2, .columna3");
    columnas.forEach(function(columna) {
        columna.style.backgroundColor = "purple";
    });
}

function ordenarFilas() {
    let contenedor = document.querySelector(".contenido");
    contenedor .style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.alignItems = "center";
}

function agregarImagen() {
    var footer = document.getElementById("footer");
    var nuevaImagen = document.createElement("img");
    nuevaImagen.src = "imagenes/imagen.png";
    nuevaImagen.width = 69;
    footer.appendChild(nuevaImagen);
}

function mostrarOcultarTexto() {
    var texto = document.querySelector(".contenido");
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}