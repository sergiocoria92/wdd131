const lastModifiedElement = document.querySelector("#lastModified");

// Actualizar el contenido del elemento con la última fecha de modificación
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
} else {
    console.log('Could not find the element with the id "lastModified"');
}

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

