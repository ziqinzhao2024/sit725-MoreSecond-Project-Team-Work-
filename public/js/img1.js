document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 2,
        name: 'Louis vuitton authentic Greenwich demier ebene bag',
        color: 'Brown',
        price: 1990.00,
        quantity: 1,
        description: 'Good in condition, we can arrange a bag check if necessary.',
        image: 'img/img1.jpg'
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
//This code adds a click event listener to the buy button (id "buyNowButton") that is triggered when the button is clicked.

//In the event handler function, an object called item is defined which represents the details of the product to be added to the shopping cart, such as product ID, name, colour, price, quantity, description and image.

//Next, retrieve the existing cart contents from the local storage and initialise a new empty cart if it does not exist.

//Add new items to the cart content.

//Finally, save the updated cart content back to local storage and redirect the browser to the shopping cart page 
//(shopping_cart.html).

//In short, this code implements the function of adding items to the cart and jumping to the shopping cart page.