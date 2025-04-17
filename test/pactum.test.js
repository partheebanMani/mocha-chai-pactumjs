const { it } = require("mocha");
const pactum = require("pactum")

it("pactum test case", async function () {

    await pactum.spec().get("https://reqres.in/api/users/2").expectStatus(200)

})