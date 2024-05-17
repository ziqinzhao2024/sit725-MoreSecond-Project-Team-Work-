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
            <button class="remove-item-button" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        subtotal += item.price * item.quantity;
    });

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`; // Update this if needed for shipping
    document.querySelector('.proceed-to-checkout').disabled = cart.length === 0;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-item-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeItemFromCart(itemId);
        });
    });
}
// Function to remove an item from the cart
function removeItemFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
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
