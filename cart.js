// Agregar un producto al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verifica si el producto ya existe
    const exists = cart.find(item => item.name === product.name);
    if (exists) {
        alert(`${product.name} ya está en el carrito.`);
        return;
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    alert(`${product.name} agregado al carrito.`);
}

// Renderizar el carrito de compras
function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalPriceElement = document.getElementById("total-price");

    if (!cartContainer || !totalPriceElement) return; // Si no existen, detener la ejecución

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h4>${item.name} - $${item.price.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</h4>
            <button class="btn-remove" data-index="${index}">Eliminar</button>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    totalPriceElement.textContent = `$${total.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;

    // Asigna eventos de eliminación
    document.querySelectorAll(".btn-remove").forEach(button => {
        button.addEventListener("click", function () {
            removeFromCart(this.getAttribute("data-index"));
        });
    });
}

// Eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Carrusel de imágenes
let currentIndex = 0;
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    if (images.length > 0) {
        setInterval(nextImage, 5000); // Cambio automático
        nextButton?.addEventListener('click', nextImage);
        prevButton?.addEventListener('click', prevImage);
    }

    renderCart(); // Renderiza el carrito al cargar la página
});
