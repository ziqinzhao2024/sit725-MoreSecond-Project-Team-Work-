

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



