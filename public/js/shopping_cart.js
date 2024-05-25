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