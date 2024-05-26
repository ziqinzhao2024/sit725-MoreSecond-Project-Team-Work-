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
//To implement the behaviour when the "buyNowButton" button is clicked.

//First, it defines an object called item which contains details of the product to be added to the shopping cart, 
//such as product ID, name, colour, price, quantity, description and image.

//It then fetches the existing cart contents from local storage and initialises an empty cart if it doesn't exist.

//Then, it adds new items to the cart content.

//Finally, the updated cart content is saved back to local storage and the browser is redirected to the shopping cart page (shopping_cart.html).

//In short, this code implements the function of adding products to the cart and jumping to the shopping cart page.