document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 6,
        name: 'Uncommon Squishies!',
        color: 'Random Colour',
        price: 10.00,
        quantity: 1,
        description: 'A squishie for you to relex.',
        image: 'img/img5.jpg'
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