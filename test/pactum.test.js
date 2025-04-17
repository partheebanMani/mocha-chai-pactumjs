const { it } = require("mocha");
const { spec } = require("pactum")

it("pactum test case", async function () {

    await spec().get("https://reqres.in/api/users/2").expectStatus(200)

})


//https://reqres.in/api/users?page=2

it("Query param test cases", async function () {
    const res = await spec()
        .get("https://reqres.in/api/users")
        .withQueryParams('page', 2)
        .expectStatus(200)
        .toss()



    console.log(`Response status: ${res.statusCode} and body: ${JSON.stringify(res.body)}`);

})