// Function to update the checkout UI
function updateCheckoutUI() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    checkoutItemsContainer.innerHTML = ''; // Clear existing items
    let subtotal = 0;

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('checkout-item');
            itemElement.innerHTML = `
                <div class="checkout-item-image"><img src="${item.image}" alt="${item.name}"></div>
                <div class="checkout-item-description">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <p>Color: ${item.color}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            `;
            checkoutItemsContainer.appendChild(itemElement);
            subtotal += item.price * item.quantity;
        });

        const totalElement = document.createElement('div');
        totalElement.classList.add('checkout-total');
        totalElement.innerHTML = `
            <h3>Total: $${subtotal.toFixed(2)}</h3>
        `;
        checkoutItemsContainer.appendChild(totalElement);
    }
}

// Function to handle form submission
document.getElementById('shipping-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;

    console.log('Shipping Details:', { name, address, city, state, zip, country });

    // Clear cart in local storage
    localStorage.removeItem('cart');

    // Redirect to a confirmation page or display a confirmation message
    alert('Purchase confirmed! Thank you for your order.');
    window.location.href = 'confirmation.html'; // Update this path as needed
});

// Call updateCheckoutUI on page load to display checkout items
document.addEventListener('DOMContentLoaded', updateCheckoutUI);