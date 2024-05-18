
var assert = require('assert');
describe("item_contoller_test", function () {
    describe("postItem", function () {
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
            afterEach(function () {
                console.log("-------after each test---------");
            })
            it("insert success", function () {
                assert.equal('','')
            })
            it("insert null object", function () {
                assert.equal('','')
            })
            it("insert object lack of fields", function () {
                assert.equal('','')
            })
            it('insert objects field type invalid', () => {
                assert.equal('','')
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
            afterEach(function () {
                console.log("-------after each test---------");
            })
            it("update success", function () {
                assert.equal('','')
            })
            it("update field is null", function () {
                assert.equal('','')
            })
            it("update value over limitation", function () {
                assert.equal('','')
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
            afterEach(function () {
                console.log("-------after each test---------");
            })
            it("success get items", function () {
                assert.equal('','')
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
            afterEach(function () {
                console.log("-------after each test---------");
            })
            it("get items by Category", function () {
                assert.equal('','')
            })
            it("category is null, no return", function () {
                assert.equal('','')
            })
        })
    })

    describe("getItemsById", function () {
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
            afterEach(function () {
                console.log("-------after each test---------");
            })
            it("get item by id successfully", function () {
                assert.equal('','')
            })
            it("get item by id when id is null", function () {
                assert.equal('','')
            })
        })
    })

    describe("deleteItem", function () {
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
            afterEach(function () {
                console.log("-------after each test---------");
            })
            it("delete item by id successfully", function () {
                assert.equal('','')
            })
            it("delete item by id when id is null", function () {
                assert.equal('','')
            })
        })
    })
})