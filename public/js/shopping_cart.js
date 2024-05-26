$(document).ready(function () {


    let addCartArr = localStorage.getItem("addCartArr")

    let carList = JSON.parse(addCartArr)

    console.log(carList)

    let str = `<table class="table">
        <thead>
          <tr>
            <th>item_name</th>
            <th>actual_price</th>
            <th>quantity</th>
            <th>money</th>
          </tr>
        </thead>
       `
    for (let i = 0; i < carList.length; i++) {
        let item = carList[i];
        console.log(item)
        str += `<tbody>
                        <tr>
                            <td>${item.item_name}</td>
                            <td>${item.original_price}</td>
                            <td>1</td>
                            <td>$${item.actual_price}</td>
                        </tr>
                    </tbody >`


    }

    str += '</table >';
 

    $(".cart-totals .card").append(str)


    $(".proceedToCheckout").click(()=>{

            let money = 0

             
            for (let i = 0; i < carList.length; i++) {
                money+= parseInt(carList[i].actual_price)
            }

           alert(`You need to pay ${money} ！ `)

           setTimeout(()=>{
            alert("payment success")

            localStorage.removeItem('addCartArr')

            location.reload()


           },500)
         
    })


})
//This code is executed after the file is loaded. Firstly, it fetches the data called "addCartArr" from the local storage, 
//which contains the information of the products added to the shopping cart by the user. Then, it parses these product information into a JavaScript array carList.

//Next, the product information is converted into an HTML table through looping, where each row corresponds to a product, displaying the product name, actual price, quantity and amount. 
//The resulting HTML string is stored in the variable str.

//This form string is then inserted into the area where the shopping cart information is displayed.

//When the user clicks the "proceedToCheckout" button, the code calculates the total price of all the items in the shopping cart and pops up a box showing the amount to be paid. 
//When the payment is successful, it will pop up again and clear the shopping cart, and then reload the page.

//This code implements the display of user-selected product information in the shopping cart and provides a simple payment function.