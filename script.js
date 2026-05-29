// Esperamos a que todo el HTML esté cargado en el navegador
document.addEventListener("DOMContentLoaded", iniciarEfectosMenu);

function iniciarEfectosMenu() {
    // Capturamos el título principal usando getElementById
    let titulo = document.getElementById("tituloPrincipal");

    // Añadimos un efecto dinámico: cambiar el título cuando el mouse pase por encima
    titulo.addEventListener("mouseenter", function() {
        titulo.style.textShadow = "0 0 15px #38bdf8";
    });

    titulo.addEventListener("mouseleave", function() {
        titulo.style.textShadow = "none";
    });

    // Capturamos cada tarjeta de forma independiente por su ID
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");
    let card3 = document.getElementById("card3");

    // Podemos usar JavaScript para registrar en la consola del docente que el menú está listo
    console.log("Estructura del Menú Principal cargada correctamente con manipulación del DOM.");
}