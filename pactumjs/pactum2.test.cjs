const { spec, response, pactum, request, handler, expect } = require('pactum');
const config = require("../config/config.cjs")


describe("pactum 2 test", async () => {

    
    it("Second test cases", async () => {

        const response = await spec()
            .delete(config.delete_path)
            .withPathParams("id", 2)
            .toss();

        expect(response).to.have.status(204)   
        
    })

})