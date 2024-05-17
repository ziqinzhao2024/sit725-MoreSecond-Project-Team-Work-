document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 8,
        name: 'Queen size wrought iron bed frame & mattress combo',
        color: 'Metal',
        price: 128.00,
        quantity: 1,
        description: 'Good enough for two people to cuddle.',
        image: 'img/img7.jpg'
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