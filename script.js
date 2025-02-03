document.addEventListener("DOMContentLoaded", () => {
    // Asegurarse de que las imágenes se carguen y animen correctamente
    const decorativeImages = document.querySelectorAll(".decorative-image");
    decorativeImages.forEach((img) => {
        img.style.opacity = "1"; // Hacer las imágenes visibles
    });

    // Obtener todas las flechas
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
        // Establecer el ID de la sección al que debe ir cada flecha
        const targetSectionId = arrow.getAttribute("data-target");
        arrow.addEventListener("click", () => {
            scrollToSection(targetSectionId);
        });
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
