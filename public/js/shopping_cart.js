// Function to update the cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let subtotal = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item-description">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p>Color: ${item.color}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
            </div>
            <div class="cart-item-subtotal">$${(item.price * item.quantity).toFixed(2)}</div>
        `;
        cartItemsContainer.appendChild(itemElement);
        subtotal += item.price * item.quantity;
    });

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`; // Update this if needed for shipping
    document.querySelector('.proceed-to-checkout').disabled = cart.length === 0;
}

// Call updateCartUI on page load to display cart items
document.addEventListener('DOMContentLoaded', updateCartUI);

// Example function to apply a coupon
function applyCoupon() {
    // Logic to apply coupon
}

// Example function to update the cart
function updateCart() {
    // Logic to update the cart
}

// Example adding item to cart (remove this after testing)
function addItemToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}
