$(document).ready(function () {
    let url = "http://localhost:9999"
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



    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get("id");

    //Get product detailed info

    let itemInfo = {}


    fetchFun(url + "/api/items/" + id, "GET", "").then(res => {
        console.log("商品信息", res)
        itemInfo = res

        getCategory(res.category)


        $('#productImg').attr('src', `http://localhost:9999/img/${res.pic}`);


        $(".productDescription").append(`
        <p> category : ${res.category} </p>
        <p>description ：${res.description} </p>
        <p>size：${res.size} </p>
        <p>color：${res.color} </p>
        <p>original_price：${res.original_price}</p>
        <p>price_symbol：${res.price_symbol}</p>
        <p>actual_price：${res.actual_price}</p>
        
        `)


    })



    //Check similar items
    function getCategory(category) {

        fetchFun(url + "/api/items/category/" + category, "GET", "").then(res => {
            console.log("Product", res)

            let arr = res
            let str = ""
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                str += `

                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Sale badge-->
                        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                        <!-- Product image-->
                        <img class="card-img-top" src="http://localhost:9999/img/${item.pic}" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${item.item_name}</h5>
                                <!-- Product reviews-->
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                <!-- Product price-->
                                <span class="text-muted text-decoration-line-through">$${item.original_price}</span>
                                $${item.actual_price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto"href="item.html?id=${item._id}">View options</a></div>
                        </div>
                    </div>
                </div>
                `
            }

            $(".itemCommodity").append(str)

        })
    }


    //Create order



    $(".buyNow").click(() => {
        console.log(itemInfo)
        let userInfo = localStorage.getItem("userInfo")

        if (userInfo == null) {
            alert("please log in")
            return
        }
        userInfo = JSON.parse(userInfo)
        let data = [
            {
                "user_id": userInfo._id,
                "item_id": itemInfo._id,
                "item_name": itemInfo.item_name,
                "category": itemInfo.category,
                "size": itemInfo.size,
                "num": 1,
                "original_price": itemInfo.original_price,
                "actual_price": itemInfo.actual_price
            }
        ]

        console.log("购买", data)
        fetchFun(url + "/api/orders", "POST", data).then(res => {

            console.log("购买结果", res)
            alert(res.message)

        })

    })

    //addCart
    $(".AddCart").click(() => {



        let addCartArr = localStorage.getItem("addCartArr")
        console.log(addCartArr)

        let arr = []

        if (addCartArr == null) {
            arr.push(itemInfo)

            localStorage.setItem("addCartArr", JSON.stringify(arr))

        } else {

            let addCartList = JSON.parse(addCartArr)
            addCartList.push(itemInfo)
            localStorage.setItem("addCartArr", JSON.stringify(addCartList))


        }

        alert("Add to cart successfully")

    })

})
//First, it sets a variable url and initialises it to "http://localhost:9999", which is used for subsequent API requests.

//Then, it defines a function called fetchFun, which is used to send the API request. It accepts three parameters: the requested URL, the requested method (GET, POST, etc.), 
//and the requested data. Depending on whether the data is null or not, it sends different types of requests 
//and returns a Promise object that can be used to asynchronously process the results of the request.

//Next, a function called getUrlParam is defined that is used to retrieve the value of a specific parameter from the URL.

//Then, the product ID is obtained by fetching the parameter from the URL.

//After that, a GET request is sent to get the product details. Once the information is obtained, the product's image and description are displayed on the web page.

//Next, another GET request is sent to get the information of similar products according to the product classification and displayed on the web page.

//Finally, two event listeners are defined for clicking the "buyNow" button and "AddCart" button respectively. When "buyNow" button is clicked, 
//the product is added to the shopping cart and the order is created;
// when "AddCart" button is clicked, the product is added to the shopping cart.