$(document).ready(function () {
    let url = "http://localhost:8080"
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



})