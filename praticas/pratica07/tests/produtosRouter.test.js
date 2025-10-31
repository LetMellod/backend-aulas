const supertest = require("supertest");
const app = require('../app');
const request = supertest(app);

describe('Testes do endpoint /produtos', () => {
    let  id;
    Test ('POST / Deve criar um produto com sucesso', async () => {
        const response = await request.post('/produtos').send({nome: 'Laranja, preco: 10.0'});
        expect(response.status).toBe(201);
        expect(response.body).toHavePropety('_id');
        expect(response.body.nome).toBe('Laranja');
        id=response.body._id;
    });
})
