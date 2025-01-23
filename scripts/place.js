
const lastModifiedElement = document.querySelector("#lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
} else {
    console.log('Could not find the element with the id "lastModified"');
}



/*con este codigo se logra cambiar de imagenes segun donde se vea la pagina*/



window.addEventListener("resize", function() {
    var image = document.getElementById("meerkatImage");

    if (window.innerWidth <= 767) {
        image.src = "images/meerkat.jpg";  // Cambiar imagen para móvil
    } else {
        image.src = "images/meerkat-large.jpg";   // Cambiar imagen para escritorio
    }
});

// Llamamos al evento en carga de página
window.dispatchEvent(new Event("resize"));

