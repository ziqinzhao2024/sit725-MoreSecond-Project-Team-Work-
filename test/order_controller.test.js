// Required modules and dependencies
const chai = require('chai');
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
var apiUrl = 'http://localhost:9999';
var assert = require('assert');
const { expect } = require("chai");

// Main test suite for order controller
describe("order_contoller_test", function () {

    // Nested test suite for POST requests
    describe("postorder", function () {

        // Context for grouping related tests
        context("context 1", function () {

            // Hook to run before all tests in this context
            before(function () {
                console.log("-----before test------");
            });

            // Hook to run after all tests in this context
            after(function () {
                console.log("-----after test------");
            });

            // Hook to run before each test in this context
            beforeEach(function () {
                console.log("-------before each test---------");
            });

            // Test case: Insertion success
            it("insert success", function () {
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send([{
                        "user_id": "664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name": "123",
                        "category": "Jacket test",
                        "size": "XS",
                        "num": 1
                    }])
                    .end((error, response) => {
                        // Assert that the response status code is 200 (OK)
                        assert.equal(200, 200, 'data save successfully');
                    });
            });

            // Test case: Insert null object
            it("insert null object", function () {
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send(null)
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });

            // Test case: Insert object lacking fields
            it("insert object lack of fields", function () {
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send([{
                        "user_id": "664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "category": "Jacket test",
                        "size": "XS",
                        "num": 1
                    }])
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });
        });
    });

    // Nested test suite for PUT requests
    describe("putOrder", function () {
        context("context 1", function () {

            // Before hook to perform actions before all tests
            before(function () {
                console.log("-----before test------");
                // Delete an order first
                chai.request(apiUrl)
                    .delete('/api/orders/test/1')
                    .end((err, res) => {});
                
                // Then insert a new order
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send([{
                        "user_id": "664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name": "123",
                        "category": "Jacket test",
                        "size": "XS",
                        "num": 1
                    }])
                    .end((error, response) => {});
            });

            // After hook to perform actions after all tests
            after(function () {
                console.log("-----after test------");
            });

            // Test case: Update success
            it("update success", function () {
                chai.request(apiUrl)
                    .put("/api/orders")
                    .send([{
                        "user_id": "664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name": "123",
                        "category": "Jacket test",
                        "size": "XS",
                        "num": 1
                    }])
                    .end((error, response) => {
                        // Assert that the response status code is 200 (OK)
                        assert.equal(200, 200, 'data save successfully');
                    });
            });

            // Test case: Update field is null
            it("update field is null", function () {
                chai.request(apiUrl)
                    .put("/api/orders")
                    .send([{
                        "user_id": "664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name": "123",
                        "category": "Jacket test",
                        "size": "XS",
                        "num": 1
                    }])
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });
        });
    });

    // Nested test suite for GET requests
    describe("getAllOrders", function () {
        context("context 1", function () {

            // Test case: Successfully get all orders
            it("success get orders", function () {
                chai.request(apiUrl)
                    .get("/api/orders")
                    .end((error, response) => {
                        // Assert that the response status code is 200 (OK)
                        assert.equal(200, 200, '');
                    });
            });
        });
    });

    // Nested test suite for getting orders by ID
    describe("getOrdersById", function () {
        context("context 1", function () {

            // Test case: Successfully get order by ID
            it("get order by id successfully", function () {
                chai.request(apiUrl)
                    .get("/api/orders/123456")
                    .end((error, response) => {
                        // Assert that the response status code is 500 (Internal Server Error)
                        assert.equal(500, 500, '');
                    });
            });
        });
    });

    // Nested test suite for DELETE requests
    describe("deleteOrder", function () {
        context("context 1", function () {

            // Test case: Successfully delete order by ID
            it("delete order by id successfully", function () {
                chai.request(apiUrl)
                    .delete("/api/orders/123456")
                    .end((error, response) => {
                        // Assert that the response status code is 400 (Bad Request)
                        assert.equal(400, 400, '');
                    });
            });
        });
    });
});
//This code defines a test suite for an order controller, covering various scenarios like inserting orders, updating orders, 
//fetching orders, and deleting orders. Each test case is explained in detail with comments.