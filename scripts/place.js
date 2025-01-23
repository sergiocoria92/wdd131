
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

/*esto va a ser para que se vuelvan relativos los cuadros de dialogo y no se coloquen sobre la imagen cuando es en movil*/

window.addEventListener("resize", function() {
    var infoBox = document.querySelector(".info-box");
    var infoBox2 = document.querySelector(".info-box2");

    // Si la pantalla es más pequeña o igual a 767px (móviles)
    if (window.innerWidth <= 767) {
        // Cambiar la posición a 'relative' en dispositivos móviles
        infoBox.style.position = "relative";
        infoBox2.style.position = "relative";

        // Aseguramos que las cajas no se superpongan y estén en el flujo normal del documento
        infoBox.style.marginTop = "20px";  // Espaciado superior para info-box
        infoBox2.style.marginTop = "20px"; // Espaciado superior para info-box2
    } else {
        // Si la pantalla es más grande (escritorio), establecer la posición 'absolute'
        infoBox.style.position = "absolute";
        infoBox2.style.position = "absolute";

        // Colocar las cajas en la posición que desees (por ejemplo, top: 20px)
        infoBox.style.top = "20px";
        infoBox.style.left = "20px";
        
        infoBox2.style.bottom = "20px";
        infoBox2.style.right = "20px";
    }
});

// Llamar al evento cuando se carga la página para asegurar que las cajas tengan la posición correcta
window.dispatchEvent(new Event("resize"));