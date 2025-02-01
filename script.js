// Asegurarse de que las imágenes se carguen y animen correctamente
document.addEventListener("DOMContentLoaded", () => {
    // No es necesario establecer la opacidad aquí si la animación ya la maneja
    const decorativeImages = document.querySelectorAll(".decorative-image");
    decorativeImages.forEach((img) => {
        img.style.opacity = "1"; // Hacer las imágenes visibles
    });

    // Desplazarse al evento cuando se hace clic en la flecha
    const arrow = document.querySelector(".arrow");
    arrow.addEventListener("click", () => {
        scrollToSection("evento");
    });
});

// Función para desplazarse suavemente a una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Abrir ubicación en Google Maps
function openMaps() {
    const url = "https://www.google.com/maps?q=Chacra+La+Joaquina,+Cno.+de+la+Redención+7005,+Montevideo";
    window.open(url, "_blank");
}
