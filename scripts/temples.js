const lastModifiedElement = document.querySelector("#lastModified");

// Actualizar el contenido del elemento con la última fecha de modificación
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
} else {
    console.log('Could not find the element with the id "lastModified"');
}

// Seleccionamos el icono de hamburguesa y el contenedor del menú
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

// Añadimos un evento de clic para cambiar la clase "active" en el contenedor del menú
hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
});
