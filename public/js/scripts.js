
$(document).ready(function () {
    let url = "http://120.76.228.121:8080"
    function fetchFun(url, method, data) {
        if (data == "") {
            return new Promise((resolve, reject) => {

                console.log(url, method, data)



                fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify(data)
                })
                    .then(response => {
                        console.log(111, response)
                        if (response.ok) {
                            response.json().then(jsonResponse => {
                                resolve(jsonResponse)
                            })

                        } else {
                            response.json().then(jsonResponse => {
                                console.log('JSON response:', jsonResponse);
                                alert(jsonResponse.message)
                            })
                        }
                        // throw new Error('Network response was not ok.');
                    })
                // .then(jsonResponse => {
                //     console.log('JSON response:', jsonResponse);
                //     alert(jsonResponse.message)
                // })
                // .catch(error => {
                //     console.error('Request failed:', error);
                // });

            })
        } else {
            return new Promise((resolve, reject) => {

                console.log(url, method, data)



                fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        console.log(111, response)
                        if (response.ok) {
                            response.json().then(jsonResponse => {
                                resolve(jsonResponse)
                            })

                        } else {
                            response.json().then(jsonResponse => {
                                console.log('JSON response:', jsonResponse);
                                alert(jsonResponse.message)
                            })
                        }
                        // throw new Error('Network response was not ok.');
                    })
                // .then(jsonResponse => {
                //     console.log('JSON response:', jsonResponse);
                //     alert(jsonResponse.message)
                // })
                // .catch(error => {
                //     console.error('Request failed:', error);
                // });

            })
        }


    }
    function getUrlParam(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return decodeURIComponent(r[2]);
        }
        return null;
    }

    //  Initialize Swiper 
    var swiper = new Swiper(".bannerSwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper2 = new Swiper(".oneSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });







    //signUp
    $(".signUp").click(function () {

        let firstName = $(".firstNameSignUp").val()
        let lastName = $(".lastNameSignUp").val()
        let name = $(".NameSignUp").val()
        let email = $(".EmailSignUp").val()
        let password = $(".EmailPassword").val()
        let phone_number = $(".phoneNumberSignUp").val()

        if (firstName == "") {
            alert("please fill in firstName")
            return
        }
        if (lastName == "") {
            alert("please fill in lastName")
            return
        }

        if (name == "") {
            alert("please fill in name")
            return
        }
        if (phone_number == "") {
            alert("please fill in phone_number")
            return
        }

        if (email == "") {
            alert("please fill in email")
            return
        }

        if (password == "") {
            alert("please fill in password")
            return
        }
        let data = {
            "first_name": firstName,
            "last_name": lastName,
            "name": name,
            "phone_number": phone_number,
            "email": email,
            "password": password
        }
        fetchFun(url + "/api/registry", "POST", data).then(res => {
            console.log(res)
            alert(res.message)
        })


    });

    // Login
    $(".Login").click(function () {
        let email = $(".EmailLogin").val()
        let password = $(".PasswordLogin").val()
        console.log(email)
        console.log(password)

        let data = {
            "email": email,
            "password": password,

        }

        fetchFun(url + "/api/login", "POST", data).then(res => {
            alert("Login successful")
            console.log(res)
            localStorage.setItem("userInfo", JSON.stringify(res))

            // const userInfo = { username: 'test1' };
            updateNavbarForLoggedInUser(res);

            location.reload()

        })

    });


    function init() {

        //查看用户是否登陆
        console.log()
        let userInfo = localStorage.getItem("userInfo")
        //登录过 
        if (userInfo != null) {
            updateNavbarForLoggedInUser(JSON.parse(userInfo));
        }



    }

    init()

    //获取商品
    getCommodity()
    // 获取产品列表 /api/items 
    function getCommodity() {
        let data = {
            "page_size": 9999999,
            "page_no": 1
        }

        fetchFun(url + "/api/items?page_no=1&page_size=99999", "GET", "").then(res => {
            console.log("商品", res)

            let arr = res
            let str = ""
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                str += `
                
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="http://120.76.228.121:8080/img/${item.pic}" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${item.item_name}</h5>
                                <!-- Product price-->
                                <span class="text-muted text-decoration-line-through">$${item.original_price}</span>
                                $${item.actual_price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="item.html?id=${item._id}">View
                                    options</a></div>
                        </div>
                    </div>
                </div>


                `
            }

            $(".commodity").append(str)

        })

    }



    // 商品详情

    getUrlParam()





    // User validation
    // get login status and update navigation bar buttons
    function updateNavbarForLoggedInUser(userInfo) {
        document.getElementById('loginBtn').style.display = 'none'; // hidding Login Button
        const userBtn = document.getElementById('userBtn');
        userId.innerText = userInfo.name; // assuming the userInfo contains the username
        userBtn.classList.remove('d-none'); // display username info button
    }

    function updateNavbarForLoggedOutUser() {
        document.getElementById('userBtn').style.display = 'none';
        document.getElementById('loginBtn').style.display = 'block';
    }

    // test
    // const userInfo = { username: 'test1' };
    // updateNavbarForLoggedInUser(userInfo);





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
    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear existing items
        let subtotal = 0;

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
        // document.querySelector('.proceed-to-checkout').disabled = cart.length === 0;
    }

    // Example adding item to cart
    // addItemToCart({ name: 'Black Hoodie', price: 70.00, quantity: 1, description: 'Comfortable black hoodie', image: 'path/to/image.jpg' });


})