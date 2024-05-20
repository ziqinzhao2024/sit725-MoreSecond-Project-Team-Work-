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
$("#categorySearch").on("input", function () {
    var searchText = $(this).val().toLowerCase();
    $(".list-group-item.category").each(function () {
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
function updateGeneralCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let subtotal = 0;

    console.log("Cart items:", cart);

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item-description">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="${item.quantity}" min="1" class="quantity-input">
            </div>
            <div class="cart-item-subtotal">€${(item.price * item.quantity).toFixed(2)}</div>
        `;
        cartItemsContainer.appendChild(itemElement);
        subtotal += item.price * item.quantity;
    });

    document.getElementById('subtotal').textContent = `€${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `€${subtotal.toFixed(2)}`; // Update this if needed for shipping
    const proceedToCheckoutButton = document.querySelector('.proceed-to-checkout');
    if (proceedToCheckoutButton) {
        proceedToCheckoutButton.disabled = cart.length === 0;
    }
}

// Call the function to update the cart UI on document load, if needed globally
document.addEventListener('DOMContentLoaded', updateGeneralCartUI);
