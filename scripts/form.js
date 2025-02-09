document.getElementById("last-modified").textContent = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".stars input");

    stars.forEach(star => {
        star.addEventListener("change", () => {
            let value = parseInt(star.value);

            // Quita la clase 'selected' de todas las estrellas
            document.querySelectorAll(".stars label").forEach(label => {
                label.classList.remove("selected");
            });

            // Selecciona las estrellas correctas de izquierda a derecha
            stars.forEach(input => {
                if (parseInt(input.value) >= value) { 
                    document.querySelector(`label[for="star${input.value}"]`).classList.add("selected");
                }
            });
        });
    });
});

