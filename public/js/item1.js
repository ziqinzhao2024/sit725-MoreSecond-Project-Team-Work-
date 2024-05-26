document.getElementById('buyNowButton').addEventListener('click', function () {
    // Example item details
    const item = {
        id: 1,
        name: 'Incase 13" Macbook Air Sleeve',
        color: 'Slate',
        price: 49.99,
        quantity: 1,
        description: 'A sleek sleeve for your Macbook Air.',
        image: 'img/item1.jpg'
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
//When the click event occurs, it creates an object representing the product that 
//contains various attributes of the product, such as id, name, colour, price, quantity, description and image path.

//It then retrieves the existing cart data from the local storage 
//and initialises an empty cart array if the cart data does not exist.

//Then, it adds new product objects to the cart array.

//Then, save the updated cart data back to the local storage.

//Finally, redirect users to the cart page so that they can view the items in the cart.