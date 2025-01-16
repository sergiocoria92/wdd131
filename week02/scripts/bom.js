const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");  // Corregir selector para la lista

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {  // Verifica si el campo de entrada no está vacío
    const li = document.createElement("li");
    const deletButton = document.createElement("button");

    li.textContent = input.value;  // Asigna el valor del input al li
    deletButton.textContent = "❌";  // Asigna el texto al botón de eliminar

    li.append(deletButton);  // Añadir el botón de eliminar al li
    list.append(li);  // Añadir el li a la lista

    deletButton.addEventListener('click', function () {
      list.removeChild(li);  // Eliminar el elemento li
      input.focus();  // Volver a enfocar el input
    });

    input.value = '';  // Limpiar el valor del input
    input.focus();     // Volver a enfocar el input
  }
});
