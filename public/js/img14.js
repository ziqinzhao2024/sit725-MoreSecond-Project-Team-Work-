document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 15,
        name: 'Easels for sale 150 / 175 cm new',
        color: 'Wooden',
        price: 35.00,
        quantity: 1,
        description: 'Brand new wooden easels.',
        image: 'img/img14.jpg'
    };

    // Retrieve the existing cart from local storage, or initialize a new one if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Cart before adding item:", cart);

    // Add the new item to the cart
    cart.push(item);
    console.log("Cart after adding item:", cart);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the shopping cart page
    window.location.href = 'shopping_cart.html';
});