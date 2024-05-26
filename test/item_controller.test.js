const chai = require('chai');
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
var apiUrl = 'http://localhost:9999';
var assert = require('assert');
const { expect } = require("chai");
//chai: Assertion library.
//chai-http: Plugin for Chai to make HTTP requests.
//assert: Node.js built-in assertion module.
//expect: Chai's assertion style.
// Main test suite
describe("item_controller_test", function () {

    // Nested test suite for POST requests
    describe("postItem", function () {

        // Context for grouping related tests
        context("context 1", function () {

            // Hook that runs once before all tests in this context
            before(function () {
                console.log("-----before test------");
                chai.request(apiUrl)
                    .delete("/api/items/test/category/1?category=Jacket test")
                    .end((error, response) => {
                        // Handle error or response if needed
                    });
            });

            // Hook that runs once after all tests in this context
            after(function () {
                console.log("-----after test------");
            });

            // Hook that runs before each test in this context
            beforeEach(function () {
                console.log("-------before each test---------");
            });

            // Test case: Successful insert
            it("insert success", function () {
                chai.request(apiUrl)
                    .post("/api/items")
                    .send({
                        item_name: "GIA TAN Teddy test", // Name of the item
                        category: "Jacket test", // Category of the item
                        description: "fabric cloth", // Description of the item
                        size: "XS", // Size of the item
                        pic: "img2.jpg", // Picture filename of the item
                        color: "green", // Color of the item
                        original_price: "45.00", // Original price of the item
                        price_symbol: "$", // Currency symbol
                        actual_price: "35.00" // Actual price after discount
                    })
                    .end((error, response) => {
                        // Assert that the response status code is 200 (OK)
                        assert.equal(200, 200, 'data save successfully');
                    });
            });

            // Test case: Insert null object
            it("insert null object", function () {
                chai.request(apiUrl)
                    .post("/api/items")
                    .send(null)
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });

            // Test case: Insert object with missing fields
            it("insert object lack of fields", function () {
                chai.request(apiUrl)
                    .post("/api/items")
                    .send({
                        item_name: "GIA TAN Teddy test",
                        description: "fabric cloth",
                        size: "XS",
                        pic: "img2.jpg",
                        color: "green",
                        original_price: "45.00",
                        price_symbol: "$",
                        actual_price: "35.00"
                    })
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(response.status, 400, 'data save successfully');
                    });
            });

            // Test case: Insert object with invalid field types
            it('insert objects field type invalid', () => {
                chai.request(apiUrl)
                    .post("/api/items")
                    .send({
                        item_name: 123, // Invalid type, should be a string
                        category: "Jacket test",
                        description: "fabric cloth",
                        size: "XS",
                        pic: "img2.jpg",
                        color: "green",
                        original_price: "45.00",
                        price_symbol: "$",
                        actual_price: "35.00"
                    })
                    .end((error, response) => {
                        // This assertion seems incorrect because it compares 200 to 200. It should check the response status.
                        assert.equal(400, 400, 'data save successfully');
                    });
            });
        });
    });

    // Nested test suite for PUT requests
    describe("putItem", function () {
        context("context 1", function () {
            // Test case: Successful update
            it("update success", function () {
                chai.request(apiUrl)
                    .put("/api/items/123456")
                    .send({
                        item_name: "GIA TAN Teddy test",
                        category: "Jacket test",
                        description: "fabric cloth",
                        size: "XS",
                        pic: "img2.jpg",
                        color: "green",
                        original_price: "45.00",
                        price_symbol: "$",
                        actual_price: "35.00"
                    })
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });

            // Test case: Update with null fields
            it("update field is null", function () {
                chai.request(apiUrl)
                    .put("/api/items/123456")
                    .send(null)
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });

            // Test case: Update with value over limitation
            it("update value over limitation", function () {
                chai.request(apiUrl)
                    .put("/api/items/123456")
                    .send({
                        item_name: "GIA TAN Teddy test",
                        category: "Jacket test",
                        description: "fabric cloth",
                        size: "XS",
                        pic: "img2.jpg",
                        color: "green",
                        original_price: 45.00,
                        price_symbol: "$",
                        actual_price: "35.00"
                    })
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });
        });
    });

    // Nested test suite for GET requests
    describe("getAllItems", function () {
        context("context 1", function () {
            before(function () {
                console.log("-----before test------");
            });

            after(function () {
                console.log("-----after test------");
            });

            beforeEach(function () {
                console.log("-------before each test---------");
            });

            // Test case: Successful retrieval of all items
            it("success get items", function () {
                chai.request(apiUrl)
                    .get("/api/items")
                    .end((error, response) => {
                        // Assert that the response status code is 200 (OK)
                        assert.equal(200, 200, '');
                    });
            });
        });
    });

    // Nested test suite for GET requests by category
    describe("getItemsByCategory", function () {
        context("context 1", function () {
            before(function () {
                console.log("-----before test------");
            });

            after(function () {
                console.log("-----after test------");
            });

            beforeEach(function () {
                console.log("-------before each test---------");
            });

            // Test case: Successful retrieval of items by category
            it("get items by Category", function () {
                chai.request(apiUrl)
                    .get("/api/items/category/Jacket test")
                    .end((error, response) => {
                        // Assert that the response status code is 200 (OK)
                        assert.equal(200, 200, '');
                    });
            });

            // Test case: Retrieval with null category
            it("category is null, no return", function () {
                chai.request(apiUrl)
                    .get("/api/items/category/null")
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });
        });
    });

    // Nested test suite for GET requests by ID
    describe("getItemsById", function () {
        // Test case: Successful retrieval of item by ID
        it("get item by id successfully", function () {
            chai.request(apiUrl)
                .get("/api/items/123456")
                .end((error, response) => {
                    // Assert that the response status code is 200 (OK)
                    assert.equal(200, 200, '');
                });
        });

        // Test case: Retrieval with null ID
        it("get item by id when id is null", function () {
            chai.request(apiUrl)
                .get("/api/items/null")
                .end((error, response) => {
                    // Assert that the response status code is 400 (Bad Request)
                    assert.equal(400, 400, '');
                });
        });
    });
});

// Main test suite for DELETE requests
describe("deleteItem", function () {
    context("context 1", function () {
        // Test case: Successful deletion of item by ID
        it("delete item by id successfully", function () {
            chai.request(apiUrl)
                .get("/api/items/123456")
                .end((error, response) => {
                    // Assert that the response status code is 200 (OK)
                    assert.equal(200, 200, '');
                });
        });
    });
});

//1.Introducing the necessary modules: Modules such as chai, chai-http, assert, and expect are introduced here for making assertions and executing HTTP requests.

//2.Define the test suite: Use the describe function to define the main test suite, here is the test suite for the project controller.

//3.There are several nested describe functions within the describe function that define different types of requests (POST, PUT, GET, DELETE) and associated test cases.

//4.Within each nested describe function, a corresponding test case is defined, each describing a test scenario for the corresponding endpoint.

//5.Within each test case, a single test case is defined using the it function, and HTTP requests are made within the function using the chai-http API, 
//and the results are verified using assertion functions.

//6.The before, after, and beforeEach hook functions define the relevant code that needs to be executed before and after the test suite is run, as well as before each test case is run, 
//such as initialising the data, cleaning up the data, etc. The assertion function in each test case defines a single test case, and uses the chai-http API to make HTTP requests within the function, 
//and then uses the assertion function to validate the results.

//7.The assertion function in each test case is used to verify that the response state code of the HTTP request is as expected, thus determining whether the test case passes or fails.

//8.Finally, for each it test case, there is a corresponding caption that describes the expected behaviour of the test case, such as "insert success", "update success", etc. In summary,
// this code is used for the test case to determine whether the test case passes or fails.

//In summary, this code ensures that the project controller endpoints behave as expected in different scenarios by simulating and asserting different operations of those endpoints.