document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 1,
        name: 'Incase 13" Macbook Air Sleeve',
        color: 'Slate',
        price: 49.99,
        quantity: 1,
        description: 'A sleek sleeve for your Macbook Air.',
        image: 'path/to/image.jpg' // Update with actual image path
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