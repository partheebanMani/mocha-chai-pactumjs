const { expect, handler } = require('pactum');


handler.addExpectHandler('200success', async(ctx)=>{
    expect(ctx.res).to.have.status(200, "Failed with invalid response code");
})