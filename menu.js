document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Activar/desactivar el menú al tocar el botón
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

