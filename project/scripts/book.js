const lastModifiedElement = document.querySelector("#lastModified");

// Actualizar el contenido del elemento con la última fecha de modificación
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
} else {
    console.log('Could not find the element with the id "lastModified"');
}

document.addEventListener("DOMContentLoaded", () => {
    const groupSize = document.getElementById("groupSize");
    const extraNames = document.getElementById("extraNames");
    const bookingDays = document.getElementById("bookingDays");
    const totalCost = document.getElementById("totalCost");
    const discountCodeInput = document.getElementById("discountCode");

    let discount = 0; // Descuento por defecto (sin descuento)

    // Configurar flatpickr para permitir selección múltiple de fechas
    const fp = flatpickr(bookingDays, {
        mode: "multiple", // Permitir la selección de varias fechas
        dateFormat: "Y-m-d", // Formato de fecha
        onChange: updateCost // Cada vez que cambian las fechas, actualizar el costo
    });

    document.addEventListener("DOMContentLoaded", () => {
        const bookingDays = document.getElementById("bookingDays");

            // Limpiar las fechas seleccionadas antes de inicializar
    bookingDays.value = '';
    
        flatpickr(bookingDays, {
            mode: "multiple", // Permitir la selección de varias fechas
            dateFormat: "Y-m-d", // Formato de fecha
            onChange: updateCost, // Actualizar el costo cuando cambian las fechas
            clearButton: true, // Asegurar que el botón de borrar funcione
            allowInput: true // Permite la entrada manual de fechas
        });
    });
    

    // Agregar campos para nombres extras si se seleccionan más personas
    groupSize.addEventListener("change", () => {
        extraNames.innerHTML = "";
        let peopleCount = parseInt(groupSize.value);
        if (peopleCount > 1) {
            for (let i = 2; i <= peopleCount; i++) {
                let label = document.createElement("label");
                label.textContent = `Person ${i} Name:`;

                let input = document.createElement("input");
                input.type = "text";
                input.required = true;

                extraNames.appendChild(label);
                extraNames.appendChild(input);
            }
        }
        updateCost(); // Asegurarse de que el costo se actualice si cambian las personas
    });

    // Función para actualizar el costo
    function updateCost() {
        // Obtener el número de días seleccionados de flatpickr
        let selectedDates = fp.selectedDates.length; // Número de días seleccionados
        let peopleCount = parseInt(groupSize.value); // Número de personas

        if (isNaN(peopleCount) || selectedDates === 0) {
            totalCost.textContent = "$0"; // Si no se seleccionaron fechas o personas, mostrar $0
            return;
        }

        let cost = selectedDates * 100 * peopleCount; // Costo total por días y personas

        // Aplicar descuento si el código es correcto
        if (discount > 0) {
            cost -= cost * discount; // Aplicar descuento
        }

        // Actualizar el total con 2 decimales
        totalCost.textContent = "$" + cost.toFixed(2);
    }

    // Detectar el código de descuento
    discountCodeInput.addEventListener("input", () => {
        const discountCode = discountCodeInput.value.trim();
        if (discountCode === "1234") {
            discount = 0.15; // 15% de descuento
        } else {
            discount = 0; // Sin descuento si el código es incorrecto
        }

        // Actualizar el total con el descuento aplicado
        updateCost();
    });

    // Asegurar que el total se actualice al cambiar el número de personas también
    groupSize.addEventListener("change", updateCost);
});

function createBanner() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Crear un solo banner fijo para móviles
        const topBanner = document.createElement('div');
        topBanner.classList.add('banner'); // Banner para la parte superior
        topBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
        document.body.appendChild(topBanner);
    } else {
        // Crear los banners animados para pantallas grandes
        const leftBanner = document.createElement('div');
        leftBanner.classList.add('banner', 'left'); // Banner para el lado izquierdo
        leftBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
        document.body.appendChild(leftBanner);

        const rightBanner = document.createElement('div');
        rightBanner.classList.add('banner', 'right'); // Banner para el lado derecho
        rightBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
        document.body.appendChild(rightBanner);
    }
}

// Llamar la función para agregar la cinta al cargar la página
window.onload = createBanner;
