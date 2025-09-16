// Seleccionamos el modal y la imagen que se ampliará
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgAmpliada");
const cerrar = document.querySelector(".cerrar");

// Seleccionamos todas las imágenes dentro de la lista
const imagenes = document.querySelectorAll("ol li img");

// 🔹 Recorremos cada imagen y le damos el evento "click"
imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"; // Muestra el modal
    modalImg.src = img.src;       // Cambia el src a la imagen clickeada
  });
});

// 🔹 Cerrar modal al dar clic en la "X"
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// 🔹 Cerrar modal si se hace clic fuera de la imagen
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
