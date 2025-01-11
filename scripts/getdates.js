// Obtener el año actual
const currentYear = new Date().getFullYear();

// Seleccionar el elemento con el id "year"
const yearElement = document.querySelector("#year");

// Actualizar el contenido del elemento con el año actual
if (yearElement) {
    yearElement.textContent = `© ${currentYear} | Sergio Coria Maya | Provo, Utah`;
} else {
    console.log('Could not find the element with the id "year"');
}

// Obtener el último momento de modificación del documento
const lastModifiedElement = document.querySelector("#lastModified");

// Actualizar el contenido del elemento con la última fecha de modificación
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
} else {
    console.log('Could not find the element with the id "lastModified"');
}
