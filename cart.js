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
