const lastModifiedElement = document.querySelector("#lastModified");

// Actualizar el contenido del elemento con la última fecha de modificación
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
} else {
    console.log('Could not find the element with the id "lastModified"');
}



const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Añade un listener de click para alternar la clase "show"
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
}
