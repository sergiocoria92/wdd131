document.addEventListener("DOMContentLoaded", () => {
    const groupSize = document.getElementById("groupSize");
    const extraNames = document.getElementById("extraNames");
    const bookingDays = document.getElementById("bookingDays");
    const totalCost = document.getElementById("totalCost");
    const discountCodeInput = document.getElementById("discountCode");

    let discount = 0; // Variable para el descuento

    // Agregar campos para nombres extras
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
    });

    // Calcular el costo según los días seleccionados
    bookingDays.addEventListener("change", () => {
        let peopleCount = parseInt(groupSize.value);
        let daysSelected = bookingDays.value.split(",").length || 1;
        let cost = peopleCount * daysSelected * 100;
        
        // Aplicar descuento si el código es correcto
        cost -= cost * discount;
        totalCost.textContent = cost.toFixed(2);
    });

    // Validar formulario antes de enviar
    document.getElementById("hikingForm").addEventListener("submit", (e) => {
        alert("Booking successful! We will contact you soon.");
        e.preventDefault(); // Evita el envío real del formulario por ahora
    });

    // Detectar si el código de descuento es correcto
    discountCodeInput.addEventListener("input", () => {
        const discountCode = discountCodeInput.value.trim();
        if (discountCode === "1234") {
            discount = 0.15; // 15% de descuento
        } else {
            discount = 0; // No hay descuento si el código es incorrecto
        }

        // Actualizar el total con descuento aplicado
        let peopleCount = parseInt(groupSize.value);
        let daysSelected = bookingDays.value.split(",").length || 1;
        let cost = peopleCount * daysSelected * 100;
        cost -= cost * discount;
        totalCost.textContent = cost.toFixed(2);
    });
});

// Función para crear y agregar las cintas animadas
function createBanner() {
    // Crear la cinta izquierda
    const leftBanner = document.createElement('div');
    leftBanner.classList.add('banner', 'left'); // Banner para la izquierda
    leftBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
    document.body.appendChild(leftBanner);

    // Crear la cinta derecha
    const rightBanner = document.createElement('div');
    rightBanner.classList.add('banner', 'right'); // Banner para la derecha
    rightBanner.innerHTML = '<span>Offer today only 15% discount code 1234</span>';
    document.body.appendChild(rightBanner);
}

// Llamar la función para agregar las cintas al cargar la página
window.onload = createBanner;
