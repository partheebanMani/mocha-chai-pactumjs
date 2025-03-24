const { spec, response, pactum, request, expect, handler } = require('pactum');
const { before } = require('mocha');
require("../handlers/customHandlers.cjs")
const reqresin = require("../BaseSetUp.cjs")
const  schemaValidate = require("../utilities/ResponseValidators.cjs")

const config = require('../config/config.cjs')
const userSchema = require("../resources/users.json")

const isResponseSucess = require("flowmodule")

before("Before hook to step base url ", async () => {
    request.setBaseUrl(config.request_base_url)
    request.setDefaultHeaders('Content-Type', 'application/json')
})


describe("pactums first test", function(){

    it("first test case", async function(){

        const res = await spec()
        .get("api/users/2")
        .expect('200success')
        .expectBodyContains("weaver")
        .expectBodyContains("Janet")
        .expectJsonSchema(userSchema)
        .toss();

        expect(res).to.have.status(200)

        console.log("schema validation")
        // console.log(res.response())
        // console.log(schemaValidate(userSchema,response.body))
        console.log(isResponseSucess(res.statusCode))

    })
})