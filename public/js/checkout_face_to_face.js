let subtotal = 0; // Define subtotal at the top of the script

// Function to update the checkout UI
function updateCheckoutUI() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    checkoutItemsContainer.innerHTML = ''; // Clear existing items
    subtotal = 0; // Initialize subtotal

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('checkout-item');
            itemElement.innerHTML = `
                <div class="checkout-item-image"><img src="${item.image}" alt="${item.name}" class="checkout-image"></div>
                <div class="checkout-item-description">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <p>Color: ${item.color}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            `;
            checkoutItemsContainer.appendChild(itemElement);
            subtotal += item.price * item.quantity; // Calculate subtotal
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
document.getElementById('meeting-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form values
    const meetingPlace = document.getElementById('meetingPlace').value;
    const meetingTime = document.getElementById('meetingTime').value;
    const paymentMethod = document.getElementById('payment-method').value;

    console.log('Meeting Details:', { meetingPlace, meetingTime, paymentMethod });

    if (paymentMethod === 'credit-card') {
        const ccName = document.getElementById('cc-name').value;
        const ccNumber = document.getElementById('cc-number').value;
        const ccExpiry = document.getElementById('cc-expiry').value;
        const ccCvc = document.getElementById('cc-cvc').value;
        console.log('Credit Card Details:', { ccName, ccNumber, ccExpiry, ccCvc });
    }

    // Store order details in local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderDetails = {
        cart: cart,
        total: subtotal
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Clear cart in local storage
    localStorage.removeItem('cart');

    // Redirect to a confirmation page or display a confirmation message
    alert('Meeting confirmed! Thank you for your order.');
    window.location.href = 'confirmation.html'; // Update this path as needed
});

// Function to handle payment method change
document.getElementById('payment-method').addEventListener('change', function() {
    const creditCardFields = document.getElementById('credit-card-fields');
    if (this.value === 'credit-card') {
        creditCardFields.style.display = 'block';
    } else {
        creditCardFields.style.display = 'none';
    }
});

// Call updateCheckoutUI on page load to display checkout items
document.addEventListener('DOMContentLoaded', updateCheckoutUI);