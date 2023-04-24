const request = require("supertest")
const app = require('../../src/app')


describe("/types",()=>{
    it('Debe recibir un status 200 a hacer get a "/types"',async()=>{
        const response = await request(app).get("/types");
        expect(response.statusCode).toEqual(200);
    }) 
})