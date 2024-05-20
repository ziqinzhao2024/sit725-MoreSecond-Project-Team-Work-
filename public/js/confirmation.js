document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    
    // If no order details found, display a default message
    if (!orderDetails) {
        document.getElementById('order-summary').innerHTML = '<p>No order details found.</p>';
        return;
    }
    
    // Display the order details
    const orderSummaryContainer = document.getElementById('order-summary');
    orderDetails.cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <div class="order-item-image"><img src="${item.image}" alt="${item.name}" class="order-image"></div>
            <div class="order-item-description">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p>Color: ${item.color}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        orderSummaryContainer.appendChild(itemElement);
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('order-total');
    totalElement.innerHTML = `
        <h3>Total: $${orderDetails.total.toFixed(2)}</h3>
    `;
    orderSummaryContainer.appendChild(totalElement);
});