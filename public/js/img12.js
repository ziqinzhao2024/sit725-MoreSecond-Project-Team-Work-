document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 13,
        name: '106PCS Cross Stitch Embroidery Thread Hoop Kit Skeins Floss Tools Sewing Set AU',
        color: '50 type of colours',
        price: 35.00,
        quantity: 1,
        description: 'Hoop Kit.',
        image: 'img/img12.jpg'
    };

    // Retrieve the existing cart from local storage, or initialize a new one if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(item);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the shopping cart page
    window.location.href = 'shopping_cart.html';
});