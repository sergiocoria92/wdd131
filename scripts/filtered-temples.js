const lastModifiedElement = document.querySelector("#lastModified");

// Actualizar el contenido del elemento con la última fecha de modificación
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
} else {
    console.log('Could not find the element with the id "lastModified"');
}

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Guadalajara México",
        location: "Zapopan, Jalisco",
        dedicated: "1999, april, 14",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/105-Guadalajara-Mexico-Temple.jpg"
    },
    {
        templeName: "México City México",
        location: "México City, México",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },    {
        templeName: "Colonia Juárez Chihuahua México",
        location: "Colonia Juárez Chihuahua México",
        dedicated: "1997, october, 4",
        area: 6800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
    },    {
        templeName: "Monterrey México",
        location: "Monterrey, México",
        dedicated: " 1995, December, 21",
        area: 16498,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
    },
];

// Selecciona el contenedor donde quieres mostrar las imágenes
const templesContainer = document.querySelector('.temples-container');

// Función para mostrar todos los templos
function showAllTemples() {
    templesContainer.innerHTML = ''; // Limpiar el contenedor
    temples.forEach(temple => {
        const templeElement = createTempleElement(temple);
        templesContainer.appendChild(templeElement);
    });
}

// Función para filtrar templos antiguos (antes de 1900)
function showOldTemples() {
    const filteredTemples = temples.filter(temple => {
        const dedicatedDate = new Date(temple.dedicated);
        return dedicatedDate.getFullYear() < 1900;
    });
    updateTemplesDisplay(filteredTemples);
}

// Función para filtrar templos nuevos (después de 2000)
function showNewTemples() {
    const filteredTemples = temples.filter(temple => {
        const dedicatedDate = new Date(temple.dedicated);
        return dedicatedDate.getFullYear() > 2000;
    });
    updateTemplesDisplay(filteredTemples);
}

// Función para filtrar templos grandes (más de 90,000 pies cuadrados)
function showLargeTemples() {
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    updateTemplesDisplay(filteredTemples);
}

// Función para filtrar templos pequeños (menos de 10,000 pies cuadrados)
function showSmallTemples() {
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    updateTemplesDisplay(filteredTemples);
}

// Función para actualizar la visualización de los templos
function updateTemplesDisplay(filteredTemples) {
    templesContainer.innerHTML = ''; // Limpiar el contenedor
    filteredTemples.forEach(temple => {
        const templeElement = createTempleElement(temple);
        templesContainer.appendChild(templeElement);
    });
}

// Función para crear un elemento de templo
function createTempleElement(temple) {
    const templeElement = document.createElement('div');
    templeElement.classList.add('temple-item');
    templeElement.innerHTML = `
        <div class="temple-card">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} square feet</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
        </div>
    `;
    return templeElement;
}

// Agregar event listeners a los enlaces de navegación
document.querySelector('#home-link').addEventListener('click', showAllTemples);
document.querySelector('#old-link').addEventListener('click', showOldTemples);
document.querySelector('#new-link').addEventListener('click', showNewTemples);
document.querySelector('#large-link').addEventListener('click', showLargeTemples);
document.querySelector('#small-link').addEventListener('click', showSmallTemples);

// Mostrar todos los templos al cargar la página
showAllTemples();