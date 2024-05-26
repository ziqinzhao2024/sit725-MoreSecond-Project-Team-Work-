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




    getCommodity()
    // 获取产品列表 /api/items 
    function getCommodity() {
        let data = {
            "page_size": 9999999,
            "page_no": 1
        }

        fetchFun(url + "/api/items/category/Wearing?page_no=1&page_size=99999", "GET", "").then(res => {
            console.log("Wearing", res)

            let arr = res
            let str = ""
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                str += `
                
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="http://localhost:9999/img/${item.pic}" alt="..." />
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

            $("#itemCard").append(str)

        })

    }

})
//This code uses jQuery's $(document).ready() method to run when the document is ready. First, it defines a function called fetchFun that sends an HTTP request to the specified URL, supports GET or POST methods, 
//and processes the JSON data returned by the server.

//Next, a function called getCommodity is defined to get a list of commodities in a specific category (in this case, "Wearing"). It sends a GET request to the server for a list of commodities of a specific category.

//When the server returns the product data, it converts it into HTML elements, each wrapped in a Bootstrap card that displays the product's image, name, original price, and actual price. 
//At the same time, a button is added for each product, which the user can click to view the product details.

//Finally, the generated HTML element is added to the #itemCard element on the page to display the product list.