document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 3,
        name: 'I AM GIA Tan Teddy Jacket Size XS',
        color: 'Brown',
        price: 35.00,
        quantity: 1,
        description: 'Good in condition.',
        image: 'img/img2.jpg' 
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