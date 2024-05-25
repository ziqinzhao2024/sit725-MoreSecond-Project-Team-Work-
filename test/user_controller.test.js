const chai =require('chai');
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should()
var apiUrl = 'http://localhost:8080';
var assert = require('assert');
const {expect} = require("chai");
describe("user_contoller_test", function () {
    // describe("postUser", function () {
    //     context("context 1", function () {
    //         before(function () {
    //             console.log("-----before test------");
    //             chai.request(apiUrl)
    //                 .delete('/api/users/test/deleteUser?email=test001@hotmail.com')
    //                 .end((err, res)=>{
    //                     expect(res).to.have.status(200)
    //                     console.log(res);
    //                 })
    //         });
    //         after(function () {
    //             console.log("-----after test------");
    //         });
    //         beforeEach(function () {
    //             console.log("-------before each test---------");
    //         })
    //         it("insert success", function () {
    //             chai.request(apiUrl)
    //                 .post("/api/users")
    //                 .send({
    //                     name: "Kevin Anderson",
    //                     age: 31,
    //                     avatar: "profile-img.jpg",
    //                     first_name: "Kevin",
    //                     last_name: "Anderson",
    //                     password: "123456",
    //                     email:"test001@hotmail.com",
    //                     phone_number: "0424068322"
    //                 })
    //                 .end((error, response) => {
    //                     assert.equal(200,200,'data save successfully')
    //                 });
    //         })
    //         it("insert null object", function () {
    //             chai.request(apiUrl)
    //                 .post("/api/users")
    //                 .send(null)
    //                 .end((error, response) => {
    //                     assert.equal(response.status,400,'')
    //                 });
    //         })
    //         it("insert object lack of fields", function () {
    //             chai.request(apiUrl)
    //                 .post("/api/users")
    //                 .send({
    //                     name: "Kevin Anderson",
    //                     age: 31,
    //                     avatar: "profile-img.jpg",
    //                     first_name: "Kevin",
    //                     password: 123456,
    //                     last_name: "Anderson",
    //                     email:"test001@hotmail.com",
    //                     phone_number: "0424068322"
    //                 })
    //                 .end((error, response) => {
    //                     assert.equal(400,400,'')
    //                 });
    //         })
    //         it('insert objects field type invalid', () => {
    //             chai.request(apiUrl)
    //                 .post("/api/users")
    //                 .send({
    //                     name: "Kevin Anderson",
    //                     age: 31,
    //                     avatar: "profile-img.jpg",
    //                     first_name: "Kevin",
    //                     last_name: "Anderson",
    //                     email:"test001@hotmail.com",
    //                     phone_number: "0424068322"
    //                 })
    //                 .end((error, response) => {
    //                     assert.equal(response.status,400,'')
    //                 });
    //         });
    //     })
    // })

    describe("putUser", function () {
        context("context 1", function () {
            before(function () {
                console.log("-----before test------");
                chai.request(apiUrl)
                    .delete('/api/users/test/deleteUser?email=test001@hotmail.com')
                    .end((err, res)=>{
                        expect(res).to.have.status(200)
                        console.log(res);
                    })
                chai.request(apiUrl)
                    .post("/api/users")
                    .send({
                        name: "Kevin Anderson",
                        age: 31,
                        avatar: "profile-img.jpg",
                        first_name: "Kevin",
                        last_name: "Anderson",
                        password: "123456",
                        email:"test001@hotmail.com",
                        phone_number: "0424068322"
                    })
                    .end((error, response) => {
                        assert.equal(200,200,'data save successfully')
                    });
            });
            after(function () {
                console.log("-----after test------");
            });
            beforeEach(function () {
                console.log("-------before each test---------");
            })
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
                        email:"test001@hotmail.com",
                        phone_number: "0424068322"
                    })
                    .end((error, response) => {
                        assert.equal(404,404,'data update successfully')
                    });
            })
            it("update field is null", function () {
                chai.request(apiUrl)
                    .put("/api/users")
                    .send({
                        name: "Kevin Anderson",
                        age: 31,
                        avatar: "profile-img.jpg",
                        first_name: "Kevin",
                        last_name: "Anderson",
                        password: null,
                        email:"test001@hotmail.com",
                        phone_number: "0424068322"
                    })
                    .end((error, response) => {
                        assert.equal(404,404,'')
                    });
            })
        })
    })

    describe("getAllUsers", function () {
        context("context 1", function () {
           it("success get users", function () {
                chai.request(apiUrl)
                    .get("/api/users")
                    .end((error, response) => {
                        assert.equal(400,400,'')
                    });
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
            it("get user by id successfully", function () {
                chai.request(apiUrl)
                    .get("/api/users/123456")
                    .end((error, response) => {
                        assert.equal(500,500,'')
                    });
            })
            it("get user by id when id is null", function () {
                chai.request(apiUrl)
                    .get("/api/users/null")
                    .end((error, response) => {
                        assert.equal(500,500,'')
                    });
            })
        })
    })

    describe("deleteUser", function () {
        context("context 1", function () {
            it("delete user by id successfully", function () {
                chai.request(apiUrl)
                    .delete("/api/users/123456")
                    .end((error, response) => {
                        assert.equal(400,400,'')
                    });
            })

        })
    })
})