const request = require("supertest")
const app = require('../../src/app')

describe("/pokemons",()=>{
  it("Debe responder con un status 200 al hacer un req GET a '/pokemons'", async()=>{
    const response = await request(app).get("/pokemons");
    expect(response.statusCode).toEqual(200);
  });
});