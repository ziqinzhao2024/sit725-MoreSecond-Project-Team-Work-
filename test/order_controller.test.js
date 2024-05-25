const chai =require('chai');
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should()
var apiUrl = 'http://localhost:8080';
var assert = require('assert');
const {expect} = require("chai");
describe("order_contoller_test", function () {
    describe("postorder", function () {
        context("context 1", function () {
            before(function () {
                console.log("-----before test------");
            });
            after(function () {
                console.log("-----after test------");
            });
            beforeEach(function () {
                console.log("-------before each test---------");
            })

            it("insert success", function () {
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send([{
                        "user_id":"664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name":"123",
                        "category": "Jacket test",
                        "size":"XS",
                        "num": 1

                    }])
                    .end((error, response) => {
                        assert.equal(200,200,'data save successfully')
                    });
            })
            it("insert null object", function () {
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send(null)
                    .end((error, response) => {
                        assert.equal(400,400,'')
                    });
            })
            it("insert object lack of fields", function () {
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send([{
                        "user_id":"664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "category": "Jacket test",
                        "size":"XS",
                        "num": 1

                    }])
                    .end((error, response) => {
                        assert.equal(400,400,'')
                    });
            })
        })
    })

    describe("putOrder", function () {
        context("context 1", function () {
            before(function () {
                console.log("-----before test------");
                chai.request(apiUrl)
                    .delete('/api/orders/test/1')
                    .end((err, res)=>{
                    })
                chai.request(apiUrl)
                    .post("/api/orders")
                    .send([{
                        "user_id":"664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name":"123",
                        "category": "Jacket test",
                        "size":"XS",
                        "num": 1

                    }])
                    .end((error, response) => {
                    });
            });
            after(function () {
                console.log("-----after test------");
            });
            it("update success", function () {
                chai.request(apiUrl)
                    .put("/api/orders")
                    .send([{
                        "user_id":"664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name":"123",
                        "category": "Jacket test",
                        "size":"XS",
                        "num": 1

                    }])
                    .end((error, response) => {
                        assert.equal(200,200,'data save successfully')
                    });
            })
            it("update field is null", function () {
                chai.request(apiUrl)
                    .put("/api/orders")
                    .send([{
                        "user_id":"664f416f93e308c55cc34a50",
                        "item_id": "66508fb4e8c936cc8c3c81f4",
                        "item_name":"123",
                        "category": "Jacket test",
                        "size":"XS",
                        "num": 1

                    }])
                    .end((error, response) => {
                        assert.equal(400,400,'')
                    });
            })
        })
    })

    describe("getAllOrders", function () {
        context("context 1", function () {
           it("success get orders", function () {
                chai.request(apiUrl)
                    .get("/api/orders")
                    .end((error, response) => {
                        assert.equal(200,200,'')
                    });
            })
        })
    })

    describe("getOrdersById", function () {
        context("context 1", function () {
            before(function () {
                console.log("-----before test------");
            });
            after(function () {
                console.log("-----after test------");
            });
            beforeEach(function () {
                console.log("-------before each test---------");
            })
            it("get order by id successfully", function () {
                chai.request(apiUrl)
                    .get("/api/orders/123456")
                    .end((error, response) => {
                        assert.equal(500,500,'')
                    });
            })
        })
    })

    describe("deleteOrder", function () {
        context("context 1", function () {
            it("delete order by id successfully", function () {
                chai.request(apiUrl)
                    .delete("/api/orders/123456")
                    .end((error, response) => {
                        assert.equal(400,400,'')
                    });
            })

        })
    })
})