const { spec, response, pactum, request, expect, handler } = require('pactum');
const { before, describe } = require('mocha');
require("../handlers/customHandlers.cjs")
const {restfulapi} = require("../BaseSetUp.cjs")

const config = require('../config/config.cjs')

describe("Restful API Suite", async function(){


    before("Restful API", async function(){
        request.setBaseUrl(config.restful_url)
    })

    it("GET objects", async ()=>{
        await  spec()
        .get("/").expect('200success');
    })

})