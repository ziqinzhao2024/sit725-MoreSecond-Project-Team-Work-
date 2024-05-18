
var assert = require('assert');
describe("user_contoller_test", function () {
    describe("postUser", function () {
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

    describe("putUser", function () {
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

    describe("getAllUsers", function () {
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
            it("success get users", function () {
                assert.equal('','')
            })
        })
    })

    describe("getUsersByCategory", function () {
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
            it("get users by Category", function () {
                assert.equal('','')
            })
            it("category is null, no return", function () {
                assert.equal('','')
            })
        })
    })

    describe("getUsersById", function () {
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
            it("get user by id successfully", function () {
                assert.equal('','')
            })
            it("get user by id when id is null", function () {
                assert.equal('','')
            })
        })
    })

    describe("deleteUser", function () {
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
            it("delete user by id successfully", function () {
                assert.equal('','')
            })
            it("delete user by id when id is null", function () {
                assert.equal('','')
            })
        })
    })
})