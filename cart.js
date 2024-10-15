function addToCart(product) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    
    cart.push(product);
    
    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    renderCart();
}


function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalPriceElement = document.getElementById("total-price");
    
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h4>${item.name} - $${item.price.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</h4>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    totalPriceElement.textContent = `$${total.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}`;
}


function removeFromCart(index) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    
    cart.splice(index, 1);
    
    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    renderCart();
}


document.addEventListener('DOMContentLoaded', renderCart);

// JavaScript para el carrusel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
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

// Cambiar imagen automáticamente cada 5 segundos
setInterval(nextImage, 5000);

// Controles manuales
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

