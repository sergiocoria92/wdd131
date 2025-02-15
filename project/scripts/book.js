document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.querySelector("#lastModified");

    // Mostrar la última fecha de modificación
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
    }

    // Crear banners móviles o de escritorio
    function createBanner() {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            const mobileBanner = document.createElement('div');
            mobileBanner.classList.add('banner', 'mobile');
            mobileBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
            document.body.appendChild(mobileBanner);
        } else {
            const leftBanner = document.createElement('div');
            leftBanner.classList.add('banner', 'left');
            leftBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
            document.body.appendChild(leftBanner);

            const rightBanner = document.createElement('div');
            rightBanner.classList.add('banner', 'right');
            rightBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
            document.body.appendChild(rightBanner);

            setInterval(() => {
                leftBanner.style.transform = `translateY(${Math.sin(Date.now() / 500) * 10}px)`;
                rightBanner.style.transform = `translateY(${Math.sin(Date.now() / 500) * 10}px)`;
            }, 50);
        }
    }

    // Configurar el calendario con flatpickr
    function setupCalendar() {
        const dateInput = document.querySelector("#bookingDays");
        if (dateInput) {
            flatpickr(dateInput, {
                mode: "multiple", // Permite seleccionar múltiples fechas
                dateFormat: "Y-m-d", // Formato de fecha
                allowInput: true, // Permite escribir fechas manualmente
                onChange: function (selectedDates) {
                    // Recalcula el costo cuando se seleccionan fechas
                    calculateTotalCost(selectedDates);
                }
            });
        }
    }

    // Calcular el costo total
    function calculateTotalCost(selectedDates) {
        const numDays = selectedDates.length; // Número de días seleccionados
        const groupSize = parseInt(document.querySelector("#groupSize").value, 10) || 0; // Número de personas
        let totalCost = numDays * groupSize * 100; // $100 por persona por día

        // Aplicar descuento si el código es "1234"
        const discountCode = document.querySelector("#discountCode").value.trim();
        if (discountCode === "1234") {
            totalCost *= 0.85; // Aplica un 15% de descuento
        }

        // Mostrar el costo total en la página
        document.querySelector("#totalCost").textContent = totalCost.toFixed(2);
    }

    // Eventos para recalcular el costo
    const groupSizeInput = document.querySelector("#groupSize");
    const discountCodeInput = document.querySelector("#discountCode");

    if (groupSizeInput) {
        groupSizeInput.addEventListener("change", () => {
            const selectedDates = flatpickr("#bookingDays").selectedDates;
            calculateTotalCost(selectedDates);
        });
    }

    if (discountCodeInput) {
        discountCodeInput.addEventListener("input", () => {
            const selectedDates = flatpickr("#bookingDays").selectedDates;
            calculateTotalCost(selectedDates);
        });
    }

    // Inicializar
    createBanner();
    setupCalendar();
});