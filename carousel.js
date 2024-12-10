document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-images img");
    let currentIndex = 0;

    const showImage = (index) => {
        images.forEach((img, i) => img.classList.toggle("active", i === index));
    };

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex); // Mostrar la primera imagen inicialmente
});
