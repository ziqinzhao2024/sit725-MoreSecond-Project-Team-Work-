document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 9,
        name: 'IPhone 13 Pro',
        color: 'Sierra Blue',
        price: 650.00,
        quantity: 1,
        description: 'With all boxes.',
        image: 'img/img8.jpg'
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