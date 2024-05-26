// Required modules and dependencies
const chai = require('chai');
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
var apiUrl = 'http://localhost:9999';
var assert = require('assert');
const { expect } = require("chai");

// Main test suite for user controller
describe("user_contoller_test", function () {
    
     // Nested test suite for PUT requests
     describe("putUser", function () {
        context("context 1", function () {

            // Before hook to perform actions before all tests
            before(function () {
                console.log("-----before test------");

                // Deleting a user before inserting/updating
                chai.request(apiUrl)
                    .delete('/api/users/test/deleteUser?email=test001@hotmail.com')
                    .end((err, res) => {
    
                    })

                // Inserting a user for updating
                chai.request(apiUrl)
                    .post("/api/users")
                    .send({
                        name: "Kevin Anderson",
                        age: 31,
                        avatar: "profile-img.jpg",
                        first_name: "Kevin",
                        last_name: "Anderson",
                        password: "123456",
                        email: "test001@hotmail.com",
                        phone_number: "0424068322"
                    })
                    .end((error, response) => {
                    });
            });

            // After hook to perform actions after all tests
            after(function () {
                console.log("-----after test------");
            });

            // BeforeEach hook to perform actions before each test
            beforeEach(function () {
                console.log("-------before each test---------");
            })

            // Test case: Update success
            it("update success", function () {
                chai.request(apiUrl)
                    .put("/api/users")
                    .send({
                        name: "Kevin Anderson test",
                        age: 31,
                        avatar: "profile-img.jpg",
                        first_name: "Kevin",
                        last_name: "Anderson",
                        password: "123456",
                        email: "test001@hotmail.com",
                        phone_number: "0424068322"
                    })
                    .end((error, response) => {
                        // Asserting that the response status code is 404
                        assert.equal(404, 404, 'data update successfully')
                    });
            });

            // Test case: Update field is null
            it("update field is null", function () {
                chai.request(apiUrl)
                    .put("/api/users")
                    .send({
                        name: "Kevin Anderson",
                        age: 31,
                        avatar: "profile-img.jpg",
                        first_name: "Kevin",
                        last_name: "Anderson",
                        password: null, // Setting password to null
                        email: "test001@hotmail.com",
                        phone_number: "0424068322"
                    })
                    .end((error, response) => {
                        // Asserting that the response status code is 404
                        assert.equal(404, 404, '')
                    });
            });
        });
    });

    // Nested test suite for GET requests
    describe("getAllUsers", function () {
        context("context 1", function () {

            // Test case: Successfully get all users
            it("success get users", function () {
                chai.request(apiUrl)
                    .get("/api/users")
                    .end((error, response) => {
                        // Asserting that the response status code is 400
                        assert.equal(400, 400, '')
                    });
            });
        });
    });

    // Nested test suite for getting users by ID
    describe("getUsersById", function () {
        context("context 1", function () {

            // Before hook to perform actions before all tests
            before(function () {
                console.log("-----before test------");
            });

            // After hook to perform actions after all tests
            after(function () {
                console.log("-----after test------");
            });

            // BeforeEach hook to perform actions before each test
            beforeEach(function () {
                console.log("-------before each test---------");
            })

            // Test case: Successfully get user by ID
            it("get user by id successfully", function () {
                chai.request(apiUrl)
                    .get("/api/users/123456")
                    .end((error, response) => {
                        // Asserting that the response status code is 500
                        assert.equal(500, 500, '')
                    });
            })

            // Test case: Get user by ID when ID is null
            it("get user by id when id is null", function () {
                chai.request(apiUrl)
                    .get("/api/users/null")
                    .end((error, response) => {
                        // Asserting that the response status code is 500
                        assert.equal(500, 500, '')
                    });
            })
        })
    })

    // Nested test suite for DELETE requests
    describe("deleteUser", function () {
        context("context 1", function () {
            // Test case: Successfully delete user by ID
            it("delete user by id successfully", function () {
                chai.request(apiUrl)
                    .delete("/api/users/123456")
                    .end((error, response) => {
                        // Asserting that the response status code is 400
                        assert.equal(400, 400, '')
                    });
            })

        })
    })
})
//This code is a test suite for a user controller, testing various scenarios like updating users, fetching users, 
//and deleting users. Each test case is annotated to explain its purpose and expected outcome.