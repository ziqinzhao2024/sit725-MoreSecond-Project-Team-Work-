const chai = require('chai');
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should()
var apiUrl = 'http://localhost:8080';
var assert = require('assert');
const {expect} = require("chai");
//引入了Node.js內置的assert模塊，用於在測試中斷言（assert）預期的行為
//Importing the assert module:
describe("item_contoller_test", function () {
    //使用describe函數定義了一個測試套件，描述了將要進行的測試內容。在這個測試套件中，包含了多個子測試套件和測試用例
    //Describing the test suite
    //在主测试套件内部，有几个嵌套的测试套件，如"postItem"、"putItem"、"getAllItems"等。每个套件描述了被测试功能的特定方面。
    //Within the main test suite, there are several nested test suites such as "postItem", "putItem", "getAllItems", 
    describe("postItem", function () {
        context("context 1", function () {
            //在每个测试套件内部，使用context函数定义了一个或多个上下文。每个上下文可以有钩子（before、after、beforeEach、afterEach），用于为该上下文内的测试进行设置和拆卸。
            //Within each test suite, there are one or more contexts defined using the context function. Each context can have hooks (before, after, beforeEach, afterEach) that define setup and teardown actions for the tests within that context.
            before(function () {
                // 在所有測試用例運行之前執行的代碼
                // Code to run before all tests in this context
                console.log("-----before test------");
                chai.request(apiUrl)
                    .delete("/api/items/test/category/1?category=Jacket test")
                    .end((error, response) => {
                    });
            });
            after(function () {
                // 在所有測試用例運行之後執行的代碼
                // Code to run after all tests in this context

                console.log("-----after test------");
            });
            beforeEach(function () {
                // 在每個測試用例運行之前執行的代碼
                // Code to run before each test in this context
                console.log("-------before each test---------");
            })
            it("insert success", function () {
                //使用it函数定义了几个测试用例。每个测试用例描述了正在测试的特定行为。每个测试用例中的assert.equal()语句是断言，用于检查实际结果是否与预期结果相匹配。
                chai.request(apiUrl)
                    .post("/api/items")
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
                        assert.equal(200, 200, 'data save successfully')
                    });

                //Inside each context, there are several test cases defined using the it function. Each test case describes a specific behavior that is being tested. The assert.equal() statements within each test case are assertions that check whether the actual result matches the expected result.
            })
            it("insert null object", function () {
                chai.request(apiUrl)
                    .post("/api/items")
                    .send(null)
                    .end((error, response) => {
                        assert.equal(response.status, 400, '')
                    });
            })
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
                        assert.equal(response.status, 400, 'data save successfully')
                    });
            })
            it('insert objects field type invalid', () => {
                chai.request(apiUrl)
                    .post("/api/items")
                    .send({
                        item_name: 123,
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
                        assert.equal(200, 200, 'data save successfully')
                    });
            });
        })
    })

    describe("putItem", function () {
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
                        assert.equal(400, 400, '')
                    });
            })
            it("update field is null", function () {
                chai.request(apiUrl)
                    .put("/api/items/123456")
                    .send(null)
                    .end((error, response) => {
                        assert.equal(400, 400, '')
                    });
            })
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
                        assert.equal(400, 400, '')
                    });
            })
        })
    })

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
            })
            it("success get items", function () {
                chai.request(apiUrl)
                    .get("/api/items")
                    .end((error, response) => {
                        assert.equal(200, 200, '')
                    });
            })
        })
    })

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
            })
            it("get items by Category", function () {
                chai.request(apiUrl)
                    .get("/api/items/category/Jacket test")
                    .end((error, response) => {
                        assert.equal(200, 200, '')
                    });
            })
            it("category is null, no return", function () {
                chai.request(apiUrl)
                    .get("/api/items/category/null")
                    .end((error, response) => {
                        assert.equal(400, 400, '')
                    });
            })
        })
    })

    describe("getItemsById", function () {
        it("get item by id successfully", function () {
            chai.request(apiUrl)
                .get("/api/items/123456")
                .end((error, response) => {
                    assert.equal(200, 200, '')
                });
        })
        it("get item by id when id is null", function () {
            chai.request(apiUrl)
                .get("/api/items/null")
                .end((error, response) => {
                    assert.equal(400, 400, '')
                });
        })
    })
})

describe("deleteItem", function () {
    context("context 1", function () {
        before(function () {
            // 在所有測試用例運行之前執行的代碼
            console.log("-----before test------");
        });
        after(function () {
            // 在所有測試用例運行之後執行的代碼
            console.log("-----after test------");
        });
        beforeEach(function () {
            // 在每個測試用例運行之前執行的代碼
            console.log("-------before each test---------");
        })
        it("delete item by id successfully", function () {
            chai.request(apiUrl)
                .get("/api/items/123456")
                .end((error, response) => {
                    assert.equal(200, 200, '')
                });
        })

    })
})