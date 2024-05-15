

// User validation
// get login status and update navigation bar buttons
function updateNavbarForLoggedInUser(userInfo) {
    document.getElementById('loginBtn').style.display = 'none'; // hidding Login Button
    const userBtn = document.getElementById('userBtn');
    userId.innerText = userInfo.username; // assuming the userInfo contains the username
    userBtn.classList.remove('d-none'); // display username info button
}

function updateNavbarForLoggedOutUser() {
    document.getElementById('userBtn').style.display = 'none'; 
    document.getElementById('loginBtn').style.display = 'block'; 
}

// test
const userInfo = { username: 'test1' }; 
updateNavbarForLoggedInUser(userInfo);



// Sidecanvas
$("#categorySearch").on("input", function() {
    var searchText = $(this).val().toLowerCase();
    $(".list-group-item.category").each(function() {
        var categoryText = $(this).text().toLowerCase();
        if (categoryText.indexOf(searchText) === -1) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
});

// Calculate and display number of items
var numberOfItem = $('#itemCard').children().length;
$('#itemCount').text(numberOfItem + ' Items');

/*shopping_cart.html*/
document.addEventListener('DOMContentLoaded', function() {
    // Simulated cart array, would normally be fetched or managed dynamically
    const cart = [];

    // References to the HTML elements
    const cartMessage = document.querySelector('.cart-section p');
    const subtotalSpan = document.querySelector('.subtotal span:nth-child(2)');
    const totalSpan = document.querySelector('.total span:nth-child(2)');
    const checkoutButton = document.querySelector('.proceed-to-checkout');

    // Function to update the cart UI
    function updateCartUI() {
        if (cart.length === 0) {
            cartMessage.textContent = "Your cart is currently empty.";
            subtotalSpan.textContent = "€0.00";
            totalSpan.textContent = "€0.00";
            checkoutButton.disabled = true;
        } else {
            cartMessage.textContent = "Review the items in your cart:";
            let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            subtotalSpan.textContent = `€${subtotal.toFixed(2)}`;
            totalSpan.textContent = `€${subtotal.toFixed(2)}`;
            checkoutButton.disabled = false;
        }
    }

    // Example function to add items to the cart (this would be triggered by actual cart operations)
    function addItemToCart(item) {
        cart.push(item);
        updateCartUI();
    }

    // Initial update in case there are items when page loads (here, it will be empty initially)
    updateCartUI();

    // Simulate adding an item to cart, for demonstration
    // Uncomment the line below to test adding an item
    // addItemToCart({ name: 'Black Hoodie', price: 70.00, quantity: 1 });
});

