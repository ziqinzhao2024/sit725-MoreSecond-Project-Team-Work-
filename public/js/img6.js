document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 7,
        name: 'BNWT Cinnamoroll Sanrio Japanese Collectible Toys',
        color: 'White',
        price: 29.00,
        quantity: 1,
        description: '100% from japan.',
        image: 'img/img6.jpg'
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