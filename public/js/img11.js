document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 12,
        name: 'Comfort technology socks',
        color: 'Black & Grey',
        price: 3.20,
        quantity: 1,
        description: 'Brand new socks.',
        image: 'img/img11.jpg'
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