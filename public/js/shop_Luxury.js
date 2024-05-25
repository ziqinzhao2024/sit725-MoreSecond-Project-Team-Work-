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




    getCommodity()
    // 获取产品列表 /api/items 
    function getCommodity() {
        let data = {
            "page_size": 9999999,
            "page_no": 1
        }

        fetchFun(url + "/api/items/category/Luxury?page_no=1&page_size=99999", "GET", "").then(res => {
            console.log("Wearing", res)

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

            $("#itemCard").append(str)

        })

    }

})