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



    let userInfo = localStorage.getItem("userInfo")

    if (userInfo == null) {
        alert("please log in")
        history.back();
        return
    }

    userInfo = JSON.parse(userInfo)


    console.log(userInfo)

    $(".name").text(userInfo.name)
    $(".loginEmail").text(userInfo.email)



    // $(".touxiang").attr("src", "http://localhost:9999/img/"+);


    $("#firstname").val(userInfo.first_name)
    $("#lastname").val(userInfo.last_name)
    $("#phone_number").val(userInfo.phone_number)

    //User info update
    $(".updateInfo").click(() => {


        let firstName = $("#firstname").val()
        let lastName = $("#lastname").val()
        let phone_number = $("#phone_number").val()

        if (firstName == "") {
            alert("please fill in firstName")
            return
        }
        if (lastName == "") {
            alert("please fill in lastName")
            return
        }


        if (phone_number == "") {
            alert("please fill in phone_number")
            return
        }


        let data = {
            "first_name": firstName,
            "last_name": lastName,
            "phone_number": phone_number,
            "id": userInfo._id
        }
        console.log(data)

        fetchFun(url + "/api/users/" + userInfo._id, "PUT", data).then(res => {
            console.log(res)


            userInfo.first_name = firstName
            userInfo.last_name = lastName
            userInfo.phone_number = phone_number

            console.log(userInfo)
            localStorage.setItem("userInfo", JSON.stringify(userInfo))

            alert(res.message)


            location.reload()




        })

    })


    //Get order info
    // /api/orders?user_id=664b61b1eb6e683c76c539bd&page_no=1&page_size=10
    fetchFun(url + "/api/orders/condition/" + userInfo._id + "?page_no=1&page_size=10", "GET", "").then(res => {
        console.log("order", res)

  
        let arr =  res
        let str = `<table class="table">
        <thead>
          <tr>
            <th>item_name</th>
            <th>actual_price</th>
            <th>quantity</th>
            <th>original_price</th>
          </tr>
        </thead>
       `
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            str += `<tbody>
                        <tr>
                            <td>${item.item_name}</td>
                            <td>${item.actual_price}</td>
                            <td>1</td>
                            <td>$${item.original_price}</td>
                        </tr>
                    </tbody >`


        }

        str += '</table >';

        $(".commodity").append(str)

    })


    $(".logOut").click(() => {

        localStorage.clear()

        location.reload()

    })




})
//Use the $(document).ready() function to ensure that the document (DOM) is fully loaded before executing code.

//Defines a fetchFun() function for sending HTTP requests. The function uses a Promise object to ensure that asynchronous operations are handled.

//Reads user information from local storage, prompts the user to log in if it does not exist, and returns to the previous page.

//Parses user information and populates forms and elements with it.

//Listen to the click event of the Update button to get the updated user information and send a PUT request to update the user information in the database.

//Listen to the Logout button's click event, clear the user information from local storage, and reload the page.

//Send a GET request using the fetchFun() function to retrieve the user's order information and populate the HTML form for display.

//All in all, this code implements getting user information and order information from the back-end and displaying it on the front-end, 
//as well as providing user information updating and logout functionality.





